<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class CurrencyService
{
    public function getExchangeRate(string $from = 'USD', string $to = 'EUR'): float
    {
        return Cache::remember("exchange_rate_{$from}_{$to}", 60 * 60 * 24, function () use ($from, $to) {
            $response = Http::get("https://api.exchangerate-api.com/v4/latest/{$from}");

            if ($response->successful()) {
                $rates = $response->json()['rates'];
                return $rates[$to] ?? 1.0;
            }

            return 1.0;
        });
    }

    public function convert(float $amount, string $from = 'USD', string $to = 'EUR'): float
    {
        $rate = $this->getExchangeRate($from, $to);
        return round($amount * $rate, 2);
    }
}
