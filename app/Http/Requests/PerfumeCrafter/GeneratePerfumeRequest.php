<?php

namespace App\Http\Requests\PerfumeCrafter;

use Illuminate\Foundation\Http\FormRequest;

class GeneratePerfumeRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'tags' => 'required|array',
            'customValues' => 'nullable|array',
            'customValues.*.category' => 'required|string',
            'customValues.*.value' => 'required|string',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
