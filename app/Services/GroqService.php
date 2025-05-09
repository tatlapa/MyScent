<?php

namespace App\Services;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use App\Exceptions\GroqAPIException;
use Illuminate\Support\Facades\Cache;


class GroqService
{
    protected array $templates;
    protected string $apiUrl;
    protected array $config;
    protected int $cacheDuration;

    public function __construct()
    {
        $this->templates = json_decode(
            File::get(app_path('Services/Prompts/groq_prompt.json')),
            true
        );

        $this->apiUrl = config('services.groq.api_url');
        $this->config = [
            'model' => config('services.groq.model'),
            'temperature' => config('services.groq.temperature', 0.7),
            'max_tokens' => config('services.groq.max_tokens', 1000),
            'headers' => [
                'Authorization' => 'Bearer ' . config('services.groq.api_key'),
                'Content-Type' => 'application/json',
            ]
        ];
        $this->cacheDuration = config('services.groq.cache_duration', 3600);
    }

    public function generateCustomizationPrompt(array $values): string
    {
        $template = $this->templates['customization'];

        $preferences = collect($values)
            ->map(function ($value) use ($template) {
                return strtr($template['format']['preferences'], [
                    '{{category}}' => $value['category'],
                    '{{value}}' => $value['value']
                ]);
            })
            ->join("\n");

        return strtr($template['template'], [
            '{{preferences}}' => $preferences
        ]);
    }

    public function generatePrompt(array $tags, array $preferences): string
    {
        return $this->generateTemplatedPrompt('main', $tags, $preferences);
    }

    public function generatePerfumePrompt(array $tags, array $preferences): string
    {
        return $this->generateTemplatedPrompt('perfume', $tags, $preferences);
    }

    private function generateTemplatedPrompt(string $type, array $tags, array $preferences): string
    {
        $template = $this->templates[$type];
        $characteristics = [];

        // Gérer les champs simples
        foreach (['gender', 'age', 'color'] as $field) {
            if (!empty($tags[$field])) {
                $characteristics[] = strtr($template['format'][$field], [
                    '{{value}}' => $tags[$field]
                ]);
            }
        }

        // Gérer les tableaux
        foreach (['emotions', 'occasions', 'scentFamilies'] as $field) {
            if (!empty($tags[$field])) {
                $characteristics[] = strtr($template['format'][$field], [
                    '{{value}}' => implode(', ', $tags[$field])
                ]);
            }
        }

        // Gérer les préférences
        foreach (['story', 'nature', 'style'] as $field) {
            if (!empty($preferences[$field])) {
                $characteristics[] = strtr($template['format'][$field], [
                    '{{value}}' => $preferences[$field]
                ]);
            }
        }

        return strtr($template['template'], [
            '{{characteristics}}' => implode("\n", $characteristics)
        ]);
    }

    public function generateDescription(array $tags, array $customValues): array
    {
        $prompt = $this->generatePrompt($tags, $customValues);
        return $this->makeGroqRequest($prompt);
    }

    public function generatePerfumeMatch(array $tags, array $customValues): array
    {
        $prompt = $this->generatePerfumePrompt($tags, $customValues);
        return $this->makeGroqRequest($prompt);
    }

    public function generateCustomization(array $customValues): array
    {
        $prompt = $this->generateCustomizationPrompt($customValues);
        return $this->makeGroqRequest($prompt);
    }

    private function makeGroqRequest(string $prompt): array
    {
        $cacheKey = 'groq_' . md5($prompt);

        return Cache::remember($cacheKey, $this->cacheDuration, function () use ($prompt) {
            try {
                $response = Http::withHeaders($this->config['headers'])
                    ->timeout(30)
                    ->post($this->apiUrl, [
                        'model' => $this->config['model'],
                        'temperature' => $this->config['temperature'],
                        'max_tokens' => $this->config['max_tokens'],
                        'messages' => [
                            [
                                'role' => 'system',
                                'content' => 'You are a master perfumer with extensive knowledge of fragrances.'
                            ],
                            [
                                'role' => 'user',
                                'content' => $prompt
                            ]
                        ]
                    ]);

                if ($response->failed()) {
                    throw new GroqAPIException(
                        $response->json('error.message', 'Failed to connect to GROQ API')
                    );
                }

                $content = $response->json('choices.0.message.content');

                if (!$content) {
                    throw new GroqAPIException('Invalid response format from GROQ API');
                }

                // Parse la réponse JSON du contenu
                $decodedContent = json_decode($content, true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    throw new GroqAPIException('Invalid JSON response from GROQ API');
                }

                return $decodedContent;

            } catch (\Exception $e) {
                \Log::error('GROQ API Error', [
                    'error' => $e->getMessage(),
                    'prompt' => $prompt
                ]);
                throw new GroqAPIException(
                    'An error occurred while generating the content'
                );
            }
        });
    }
}
