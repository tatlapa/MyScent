<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ComfyUIService
{
    protected $baseUrl;
    protected $apiUrl;
    protected $clientId;

    public function __construct()
    {
        $this->baseUrl = config('services.comfyui.base_url', 'http://127.0.0.1:8188');
        $this->apiUrl = $this->baseUrl;
        $this->clientId = uniqid('laravel_');
    }

    public function generateImage(array $prompt, string $outputPath = 'comfyui/images', int $timeout = 0)
    {
        try {
            $promptResponse = Http::withBasicAuth('user', 'Aa123123')
                ->post($this->apiUrl . '/prompt', [
                    'prompt' => $prompt,
                    'client_id' => $this->clientId
                ]);

            if (!$promptResponse->successful()) {
                Log::error('ComfyUI prompt error', ['response' => $promptResponse->json()]);
                return null;
            }

            $promptId = $promptResponse->json('prompt_id');

            if (!$promptId) {
                Log::error('ComfyUI no prompt ID returned');
                return null;
            }

            return $promptId;
        } catch (\Exception $e) {
            Log::error('ComfyUI service error: ' . $e->getMessage());
            return null;
        }
    }

    public function historyImage(string $promptId) {

        try {
            $historyResponse = Http::withBasicAuth('user', 'Aa123123')
                ->get($this->apiUrl . '/history/' . $promptId);

            if (!$historyResponse->successful()) {
                Log::error('ComfyUI prompt error', ['response' => $historyResponse->json()]);
                return null;
            }

            $data = $historyResponse->json();

            $status_str = $data[$promptId]['status']['status_str'];
            $filename = $data[$promptId]['outputs'][52]['images'][0]['filename'];

            $storagePath = $this->downloadImage(['filename' => $filename], '/' . $promptId);

            return [
                'status_str' => $status_str,
                'storage_path' => $storagePath,
            ];
        } catch (\Exception $e) {
            Log::error('ComfyUI service error: ' . $e->getMessage());
            return null;
        }
    }

    protected function downloadImage(array $imageData, string $outputPath)
    {
        $filename = $imageData['filename'];
        $subfolder = $imageData['subfolder'] ?? '';

        $imageUrl = $this->baseUrl . '/view?filename=' . urlencode($filename);
        if ($subfolder) {
            $imageUrl .= '&subfolder=' . urlencode($subfolder);
        }

        $imageResponse = Http::withBasicAuth('user', 'Aa123123')->get($imageUrl);

        if (!$imageResponse->successful()) {
            Log::error('Failed to download image from ComfyUI', ['url' => $imageUrl]);
            return null;
        }

        $storagePath = $outputPath . '/' . $filename;
        Storage::disk('perfumes')->put($storagePath, $imageResponse->body());

        $imageUrlWithNewName = Storage::disk('perfumes')->url($storagePath);

        return $imageUrlWithNewName;
    }

    /**
     * Vérifie l'état du serveur ComfyUI
     *
     * @return bool True si le serveur est en ligne
     */
    public function checkServerStatus()
    {
        try {
            $response = Http::get($this->baseUrl);
            return $response->successful();
        } catch (\Exception $e) {
            Log::error('ComfyUI server check failed: ' . $e->getMessage());
            return false;
        }
    }

    /**
     * Obtient des informations sur l'état de la file d'attente
     *
     * @return array|null Informations sur la file d'attente ou null en cas d'erreur
     */
    public function getQueueStatus()
    {
        try {
            $response = Http::get($this->apiUrl . '/queue');

            if (!$response->successful()) {
                Log::error('Failed to get ComfyUI queue status', ['status' => $response->status()]);
                return null;
            }

            return $response->json();
        } catch (\Exception $e) {
            Log::error('Error getting ComfyUI queue status: ' . $e->getMessage());
            return null;
        }
    }

    public function loadWorkflowFromJson(string $jsonPath, array $parameters = [])
    {
        try {
            if (!file_exists($jsonPath)) {
                Log::error('ComfyUI workflow JSON file not found', ['path' => $jsonPath]);
                return null;
            }

            $jsonContent = file_get_contents($jsonPath);
            $workflowData = json_decode($jsonContent, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                Log::error('ComfyUI workflow JSON parse error', ['error' => json_last_error_msg()]);
                return null;
            }

            // Si le JSON contient un wrapper "workflow", l'utiliser
            $workflow = $workflowData['workflow'] ?? $workflowData;

            // Fusionner les paramètres fournis avec ceux du JSON
            $defaultParams = $workflowData['parameters'] ?? [];
            $mergedParams = array_merge($defaultParams, $parameters);

            // Remplacer les placeholders dans le workflow
            $workflow = $this->replaceWorkflowPlaceholders($workflow, $mergedParams);

            return $workflow;
        } catch (\Exception $e) {
            Log::error('Error loading workflow from JSON: ' . $e->getMessage());
            return null;
        }
    }

    protected function replaceWorkflowPlaceholders(array $workflow, array $parameters)
    {
        $json = json_encode($workflow);

        foreach ($parameters as $key => $value) {
            $json = str_replace('"{{' . $key . '}}"', is_numeric($value) ? $value : '"' . $value . '"', $json);
            // Pour les placeholders à l'intérieur de chaînes
            $json = str_replace('{{' . $key . '}}', $value, $json);
        }

        return json_decode($json, true);
    }
}
