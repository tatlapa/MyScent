<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\PerfumeCrafter\GeneratePerfumeRequest;
use App\Models\PerfumeCraft;
use App\Services\ComfyUIService;
use App\Services\LLM\GeminiService;
use Illuminate\Http\JsonResponse;
use App\Exceptions\GeminiAPI;
use Illuminate\Support\Facades\File;

class PerfumeCrafterController extends Controller
{
    private GeminiService $geminiService;

    public function __construct(GeminiService $geminiService)
    {
        $this->geminiService = $geminiService;
    }

    public function generateDescription(GeneratePerfumeRequest $request): JsonResponse
    {
        try {
            $result = $this->geminiService->generateDescription(
                $request->validated('tags'),
                $request->validated('customValues', [])
            );

            return response()->json([
                'status' => 'success',
                'data' => $result
            ]);

        } catch (GeminiAPI $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function craftPerfume(GeneratePerfumeRequest $request): JsonResponse
    {
        try {
            $validated = $request->validated();

            $prompt = $this->buildPerfumePrompt(
                $validated['tags'],
                $validated['customValues']
            );

            $result = $this->geminiService
                ->setTemperature(0.7)
                ->generate($prompt);

            if (!$this->validatePerfumeResult($result['content'])) {
                throw new \InvalidArgumentException('Invalid perfume result structure');
            }

            $perfumeCraft = PerfumeCraft::firstOrCreate(
                ['prompt_key' => $result['prompt_key']],
                [
                    'tags' => $validated['tags'],
                    'custom_values' => $validated['customValues'],
                    'result' => $result['content']
                ]
            );

            return response()->json([
                'status' => 'success',
                'data' => $perfumeCraft->getFilteredResult()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    private function validatePerfumeResult(array $result): bool
    {
        $requiredSections = [
            'name',
            'gender_strength',
            'rating',
            'similar_purpose_brand_name',
            'closest_scent_brand_name',
            'emotion_stages' => ['dry_down', 'initial_impression', 'long_lasting_impression'],
            'scent_evolution' => ['top_notes', 'base_notes', 'heart_notes'],
            'detailed_recipe',
            'general_scent_description',
//            'connection_to_customer_requirements',
            'emotion_evolution_graph',
            'occasion_rating_graph',
            'image_prompt'
        ];

        foreach ($requiredSections as $key => $value) {
            if (is_array($value)) {
                if (!isset($result[$key])) return false;
                foreach ($value as $subKey) {
                    if (!isset($result[$key][$subKey])) return false;
                }
            } else {
                if (!isset($result[$value])) return false;
            }
        }

        return true;
    }

    private function buildPerfumePrompt(array $tags, array $customValues): string
    {
        $basePrompt = str_replace('\n', "\n", File::get(app_path('Services/LLM/prompts/perfume_prompt.txt')));

        // Organiser les tags par catégorie
        $categorizedTags = [];
        foreach ($tags as $tag) {
            $category = $tag['category'];
            if ($category === 'Scent Family') {
                $categorizedTags[$category][] = $tag['text'];
            } else if ($category === 'emotion') {
                $categorizedTags[$category][] = $tag['text'];
            } else {
                $categorizedTags[$category] = $tag['text'];
            }
        }

        // Construire les caractéristiques
        $characteristics = [];

        if (isset($categorizedTags['gender'])) {
            $characteristics[] = "Gender: {$categorizedTags['gender']}";
        }
        if (isset($categorizedTags['age'])) {
            $characteristics[] = "Age group: {$categorizedTags['age']}";
        }
        if (isset($categorizedTags['color'])) {
            $characteristics[] = "Color association: {$categorizedTags['color']}";
        }

        // Gérer les occasions
        if (isset($categorizedTags['occasion'])) {
            $characteristics[] = "Occasions for use: {$categorizedTags['occasion']}";
        }

        // Gérer les familles de senteurs
        if (isset($categorizedTags['Scent Family'])) {
            $characteristics[] = "Preferred scent families: " . implode(', ', $categorizedTags['Scent Family']);
        }

        if (isset($categorizedTags['emotion'])) {
            $characteristics[] = "Emotions: " . implode(', ', $categorizedTags['emotion']);
        }

        // Gérer les customValues
        foreach ($customValues as $value) {
            $label = match ($value['category']) {
                'story' => 'Story/Memory association',
                'nature' => 'Nature elements',
                'style' => 'Style preference',
                default => ucfirst($value['category'])
            };
            $characteristics[] = "$label: {$value['value']}";
        }

        $characteristicsText = implode("\n", $characteristics);
//        $oilsDetails = File::get(storage_path('app/oils_details.txt'));
        $oilsDetails = '';

        $emotion1 = isset($categorizedTags['emotion'][0]) ? $categorizedTags['emotion'][0] : '';
        $emotion2 = isset($categorizedTags['emotion'][1]) ? $categorizedTags['emotion'][1] : '';
        $emotion3 = isset($categorizedTags['emotion'][2]) ? $categorizedTags['emotion'][2] : '';

        $prompt = str_replace(
            ['{{characteristics}}', '{}', '{{emotion1}}', '{{emotion2}}', '{{emotion3}}'],
            [$characteristicsText, $oilsDetails, $emotion1, $emotion2, $emotion3],
            $basePrompt
        );

        return $prompt;
    }

    public function getCustomization(GeneratePerfumeRequest $request): JsonResponse
    {
        try {
            $result = $this->geminiService->generateCustomization(
                $request->validated('customValues', [])
            );

            return response()->json([
                'status' => 'success',
                'data' => $result
            ]);

        } catch (GeminiAPI $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function generateImage($id, ComfyUIService $comfyUIService)
    {
        $perfumeCraft = PerfumeCraft::find($id);

        if (!$perfumeCraft)
            return response()->json(['status' => 'error']);

        $prompt = $perfumeCraft->result['image_prompt'];

        $workflow = $comfyUIService->loadWorkflowFromJson(app_path('Services/LLM/prompts/perfume_image.json'), ['prompt' => $prompt]);
        $promptId = $comfyUIService->generateImage($workflow);

        if ($promptId == null)
            return response()->json(['status' => 'error']);

        return response()->json(['status' => 'success', 'prompt_id' => $promptId]);
    }

    public function historyImage($id, $promptId, ComfyUIService $comfyUIService)
    {
        $perfumeCraft = PerfumeCraft::find($id);

        if (!$perfumeCraft)
            return response()->json(['status' => 'error']);

        $history = $comfyUIService->historyImage($promptId);

        if ($history == null)
            return response()->json(['status' => 'error']);

        if ($history['status_str'] == 'success') {
            $perfumeCraft->update([
                'comfy_prompt_id' => $promptId,
                'comfy_image_path' => $history['storage_path']
            ]);
        }

        return response()->json(['status' => $history['status_str'], 'storage_path' => $history['storage_path']]);
    }
}
