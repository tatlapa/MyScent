<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Country extends Model
{
    protected $fillable = ['code', 'name', 'is_active'];

    public function getFlagPathAttribute(): string
    {
        return strtolower($this->code);
    }

    public static function getActive()
    {
        return Cache::rememberForever('active_countries', function () {
            return self::where('is_active', true)
                ->get()
                ->map(fn($country) => [
                    'code' => $country->code,
                    'name' => $country->name,
                    'flag_path' => $country->flag_path,
                ]);
        });
    }
}
