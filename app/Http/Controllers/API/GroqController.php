<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\GroqService;
use App\Http\Requests\Groq\GenerateDescriptionRequest;
use Illuminate\Http\JsonResponse;
use App\Exceptions\GroqAPIException;

class GroqController extends Controller
{
    private GroqService $groqService;

    public function __construct(GroqService $groqService)
    {
        $this->groqService = $groqService;
    }

    public function generateDescription(GenerateDescriptionRequest $request): JsonResponse
    {
        try {
            $result = $this->groqService->generateDescription(
                $request->validated('tags'),
                $request->validated('customValues', [])
            );

            return response()->json([
                'status' => 'success',
                'data' => $result
            ]);

        } catch (GroqAPIException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function generatePerfumeMatch(GenerateDescriptionRequest $request): JsonResponse
    {
        try {
            $result = $this->groqService->generatePerfumeMatch(
                $request->validated('tags'),
                $request->validated('customValues', [])
            );

            return response()->json([
                'status' => 'success',
                'data' => $result
            ]);

        } catch (GroqAPIException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function generateCustomization(GenerateDescriptionRequest $request): JsonResponse
    {
        try {
            $result = $this->groqService->generateCustomization(
                $request->validated('customValues', [])
            );

            return response()->json([
                'status' => 'success',
                'data' => $result
            ]);

        } catch (GroqAPIException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
