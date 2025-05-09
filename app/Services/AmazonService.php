<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use GuzzleHttp\Exception\RequestException;

class AmazonService
{
    private $client;
    private $cacheExpiration = 1440; // 24 heures en minutes

    public function __construct()
    {
        $this->client = new \GuzzleHttp\Client([
            'base_uri' => 'https://real-time-amazon-data.p.rapidapi.com',
            'timeout' => 30,
            'headers' => [
                'x-rapidapi-host' => 'real-time-amazon-data.p.rapidapi.com',
                'x-rapidapi-key' => 'ff4ec88474mshd8f720fed3775d0p1bcccejsnb58b44da9de9'
            ]
        ]);
    }

    public function findPerfumeOnAmazon(string $perfumeName): ?array
    {
        $cacheKey = $this->generateCacheKey($perfumeName);

        // Vérification du cache avant d'appeler l'API
        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }

        try {
            $response = $this->client->get('/search', [
                'query' => [
                    'query' => $perfumeName,
                    'page' => 1
                ]
            ]);

            if ($response->getStatusCode() !== 200) {
                return null;
            }

            $data = json_decode($response->getBody()->getContents(), true);
            // Filtrage des résultats pour ne garder que les parfums
            $perfumes = $this->filterPerfumeResults($data);

            // Mise en cache des résultats
            Cache::put($cacheKey, $perfumes, $this->cacheExpiration);

            return $perfumes;
        } catch (RequestException $e) {
            // Gestion des erreurs de l'API
            \Log::error('Erreur lors de la recherche de parfum sur Amazon: ' . $e->getMessage());
            return null;
        }
    }

    /**
     * Filtre les résultats pour ne garder que les parfums pertinents
     */
    private function filterPerfumeResults(array $data): array
    {

        $results = $data['data']['products'] ?? [];
        $filteredResults = [];

        foreach ($results as $product) {
            if ($this->isPerfumeProduct($product)) {

                $filteredResults[] = [
                    'title' => $product['product_title'] ?? '',
                    'asin' => $product['asin'] ?? '',
                    'url' => $product['product_url'] ?? '',
                    'image' => $product['product_photo'] ?? '',
                    'price' => $product['product_price'],
                    'currency' => $product['currency'] ?? 'EUR',
                ];
            }
        }

        return [
            'total' => count($filteredResults),
            'products' => $filteredResults
        ];
    }

    /**
     * Détermine si un produit est un parfum basé sur son titre et sa catégorie
     */
    private function isPerfumeProduct(array $product): bool
    {
        $title = strtolower($product['product_title'] ?? '');
        $keywords = ['parfum', 'eau de toilette', 'eau de parfum', 'cologne', 'fragrance'];

        foreach ($keywords as $keyword) {
            if (strpos($title, $keyword) !== false) {
                return true;
            }
        }

        return false;
    }

    private function generateCacheKey(string $perfumeName): string
    {
        // Créer une clé de cache unique et sécurisée
        return 'amazon_perfume_' . Str::slug($perfumeName) . '_' . date('Y-m-d');
    }

    /**
     * Définit la durée d'expiration du cache en minutes
     */
    public function setCacheExpiration(int $minutes): void
    {
        $this->cacheExpiration = $minutes;
    }

    /**
     * Récupère les détails d'un parfum spécifique par son ASIN
     */
    public function getPerfumeDetails(string $asin): ?array
    {
        $cacheKey = 'amazon_perfume_details_' . $asin;

        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }

        try {
            $response = $this->client->get('/product-details', [
                'query' => [
                    'asin' => $asin,
                    'country' => 'FR'
                ]
            ]);

            if ($response->getStatusCode() !== 200) {
                return null;
            }

            $data = json_decode($response->getBody()->getContents(), true);
            $details = $data['data'] ?? null;

            if ($details) {
                Cache::put($cacheKey, $details, $this->cacheExpiration);
            }

            return $details;
        } catch (RequestException $e) {
            \Log::error('Erreur lors de la récupération des détails du parfum: ' . $e->getMessage());
            return null;
        }
    }
}
