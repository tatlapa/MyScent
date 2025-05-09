<?php

use App\Http\Controllers\API\PerfumeCrafterController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\GeocoderController;
use App\Http\Controllers\API\AmazonController;
use App\Http\Controllers\API\GroqController;

Route::controller(GeocoderController::class)->prefix('geocoder')->group(function () {
    Route::get('/address-suggestions', 'getSuggestions');
});

Route::controller(AmazonController::class)->prefix('perfumes')->group(function () {
    Route::get('/search', 'search');
});

Route::controller(GroqController::class)->prefix('groq')->group(function () {
    Route::post('/description', 'generateDescription');
    Route::post('/perfume-match', 'generatePerfumeMatch');
    Route::post('/customization', 'generateCustomization');
});

Route::controller(PerfumeCrafterController::class)->prefix('perfume')->group(function () {
    Route::post('/description', 'generateDescription');
    Route::post('/craft', 'craftPerfume');
    Route::post('/customize', 'getCustomization');
    Route::post('/image/generate/{id}', 'generateImage');
    Route::get('/image/history/{id}/{perfumeCrafter}', 'historyImage');
});
