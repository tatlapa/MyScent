<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GeocoderController extends Controller
{
    public function getSuggestions(Request $request)
    {
        $query = $request->input('query');
        $apiKey = config('services.google.places_api_key');

        $response = Http::get('https://maps.googleapis.com/maps/api/place/autocomplete/json', [
            'input' => $query,
            'key' => $apiKey,
            'types' => 'address',
        ]);

        if ($response->successful()) {
            $suggestions = $response->json()['predictions'];

            $formattedSuggestions = array_map(function($suggestion) use ($apiKey) {
                $details = $this->getPlaceDetails($suggestion['place_id'], $apiKey);

                // Construire l'adresse de manière plus robuste
                $address = '';
                if (!empty($details['street_number'])) {
                    $address .= $details['street_number'] . ' ';
                }
                if (!empty($details['route'])) {
                    $address .= $details['route'];
                }

                return [
                    'id' => $suggestion['place_id'],
                    'address' => trim($address),
                    'zipCode' => $details['postal_code'] ?? '',
                    'city' => $details['locality'] ?? '',
                    'state' => $details['administrative_area_level_1'] ?? '',
                    'country' => $details['country'] ?? '',
                ];
            }, $suggestions);

            return response()->json($formattedSuggestions);
        }

        return response()->json(['error' => 'Impossible de récupérer les suggestions'], 500);
    }

    private function getPlaceDetails($placeId, $apiKey)
    {
        $response = Http::get('https://maps.googleapis.com/maps/api/place/details/json', [
            'place_id' => $placeId,
            'fields' => 'address_components,formatted_address',
            'key' => $apiKey,
        ]);

        if ($response->successful() && isset($response->json()['result']['address_components'])) {
            $components = $response->json()['result']['address_components'];
            \Log::debug('Place details response:', ['place_id' => $placeId, 'components' => $components]);
            $details = [];
            foreach ($components as $component) {
                if (in_array('street_number', $component['types'])) {
                    $details['street_number'] = $component['long_name'];
                }
                if (in_array('route', $component['types'])) {
                    $details['route'] = $component['long_name'];
                }
                if (in_array('postal_code', $component['types'])) {
                    $details['postal_code'] = $component['long_name'];
                }
                if (in_array('locality', $component['types'])) {
                    $details['locality'] = $component['long_name'];
                }
                if (in_array('administrative_area_level_1', $component['types'])) {
                    $details['administrative_area_level_1'] = $component['long_name'];
                }
                if (in_array('country', $component['types'])) {
                    $details['country'] = $component['long_name'];
                }
            }
            return $details;
        }

        return [];
    }
}
