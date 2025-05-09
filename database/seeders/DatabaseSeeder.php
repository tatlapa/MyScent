<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'firstname' => 'John',
            'lastname' => 'Doe',
            'email' => 'test@example.com',
        ]);

        $this->call([
            CountrySeeder::class,
            CurrencySeeder::class,
        ]);
    }
}
