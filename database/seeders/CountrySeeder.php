<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    public function run(): void
    {
        $countries = [
            ['code' => 'en', 'name' => 'English'],
            ['code' => 'fr', 'name' => 'Français'],
            ['code' => 'th', 'name' => 'Thai'],
        ];

        foreach ($countries as $country) {
            Country::create($country);
        }

    }
}
