<?php

namespace App\Services\LLM;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use App\Exceptions\GeminiAPI;

class GeminiService
{
    protected string $apiUrl;
    protected array $config;
    protected int $cacheDuration;

    public function __construct()
    {
        $this->apiUrl = config('services.gemini.api_url');
        $this->config = [
            'headers' => [
                'x-goog-api-key' => config('services.gemini.api_key'),
                'Content-Type' => 'application/json',
            ],
            'temperature' => config('services.gemini.temperature', 0.7),
            'maxOutputTokens' => config('services.gemini.max_tokens', 10000),
        ];
        $this->cacheDuration = config('services.gemini.cache_duration', 3600);
    }

    public function generate(string $prompt, bool $useCache = true): array
    {
        if ($useCache) {
            return $this->cachedGenerate($prompt);
        }

        return $this->makeGeminiRequest($prompt);
    }

    private function cachedGenerate(string $prompt): array
    {
        $md5Key = md5($prompt);
        $cacheKey = 'gemini_' . $md5Key;
        return Cache::remember($cacheKey, $this->cacheDuration, fn() => $this->makeGeminiRequest($prompt));
    }

    private function makeGeminiRequest(string $prompt): array
    {
        try {
            $md5Key = md5($prompt);

            $response = Http::withHeaders($this->config['headers'])
                ->timeout(30)
                ->post($this->apiUrl, [
                    'contents' => [
                        [
                            'parts' => [
                                [
                                    'text' => $prompt
                                ]
                            ]
                        ]
                    ],
                    'generationConfig' => [
                        'temperature' => $this->config['temperature'],
                        'maxOutputTokens' => $this->config['maxOutputTokens'],
                    ]
                ]);

            if ($response->failed()) {
                throw new GeminiAPI(
                    $response->json('error.message', 'Failed to connect to Gemini API')
                );
            }

            $content = $response->json('candidates.0.content.parts.0.text');

            if (!$content) {
                throw new GeminiAPI('Invalid response format from Gemini API');
            }

            // Tentative de parser le JSON de la réponse
            if (preg_match('/```json\s*([\s\S]*?)\s*```/', $content, $matches)) {
                $jsonContent = $matches[1];
            } else {
                $jsonContent = $content;
            }

            $decodedContent = json_decode($jsonContent, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                return [
                    'content' => $content,
                    'prompt_key' => $md5Key
                ];
            }

            return array_merge(
                ['content' => $decodedContent],
                ['prompt_key' => $md5Key]
            );

        } catch (\Exception $e) {
            \Log::error('Gemini API Error', [
                'error' => $e->getMessage(),
                'prompt' => $prompt,
                'prompt_key' => md5($prompt)
            ]);
            throw new GeminiAPI(
                'An error occurred while generating the content: ' . $e->getMessage()
            );
        }
    }

    public function setTemperature(float $temperature): self
    {
        $this->config['temperature'] = $temperature;
        return $this;
    }

    public function setMaxTokens(int $maxTokens): self
    {
        $this->config['maxOutputTokens'] = $maxTokens;
        return $this;
    }
}
