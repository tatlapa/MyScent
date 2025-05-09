<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Currency extends Model
{
    protected $fillable = ['code', 'name', 'symbol', 'is_active'];

    public static function getActive()
    {
        return Cache::rememberForever('active_currencies', function () {
            return self::where('is_active', true)
                ->get()
                ->map(fn($currency) => [
                    'code' => $currency->code,
                    'name' => $currency->name,
                    'symbol' => $currency->symbol,
                ]);
        });
    }
}
