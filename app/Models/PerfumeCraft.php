<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PerfumeCraft extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'prompt_key',
        'tags',
        'custom_values',
        'result',
        'comfy_prompt_id',
        'comfy_image_path',
    ];

    protected function casts(): array
    {
        return [
            'tags' => 'array',
            'custom_values' => 'array',
            'result' => 'array',
        ];
    }

    public function getFilteredResult(): array
    {
        $result = $this->result;
        unset($result['detailed_recipe']);
        unset($result['image_prompt']);
        $result['id'] = $this->id;
        $result['image_url'] = $this->comfy_image_path;
        return $result;
    }
}
