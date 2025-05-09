<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('perfume_crafts', function (Blueprint $table) {
            $table->id();
            $table->text('prompt_key');
            $table->json('tags');
            $table->json('custom_values');
            $table->json('result');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('perfume_crafts');
    }
};
