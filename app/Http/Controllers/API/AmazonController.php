<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\AmazonService;
use Illuminate\Http\Request;

class AmazonController extends Controller
{
    private AmazonService $amazonService;

    public function __construct(AmazonService $amazonService)
    {
        $this->amazonService = $amazonService;
    }

    public function search(Request $request)
    {
        $perfumeName = $request->input('name');

        if (empty($perfumeName)) {
            return response()->json(['error' => 'Le nom du parfum est requis'], 400);
        }

        $perfumeResults = $this->amazonService->findPerfumeOnAmazon($perfumeName);

        if (!$perfumeResults || empty($perfumeResults['products'])) {
            return response()->json(['error' => 'Parfum non trouvé'], 404);
        }

        $firstPerfume = $perfumeResults['products'][0];

        return response()->json($firstPerfume);
    }
}
