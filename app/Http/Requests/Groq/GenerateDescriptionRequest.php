<?php

namespace App\Http\Requests\Groq;

use Illuminate\Foundation\Http\FormRequest;

class GenerateDescriptionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'tags' => 'sometimes|array',
            'tags.gender' => 'sometimes|string',
            'tags.age' => 'sometimes|string',
            'tags.emotions' => 'sometimes|array',
            'tags.emotions.*' => 'string',
            'tags.occasions' => 'sometimes|array',
            'tags.occasions.*' => 'string',
            'tags.color' => 'sometimes|string',
            'tags.scentFamilies' => 'sometimes|array',
            'tags.scentFamilies.*' => 'string',
            'customValues' => 'sometimes|array',
            'customValues.*.category' => 'required_with:customValues|string',
            'customValues.*.value' => 'required_with:customValues|string',
            'customValues.story' => 'sometimes|string',
            'customValues.nature' => 'sometimes|string',
            'customValues.style' => 'sometimes|string'
        ];
    }

    public function messages(): array
    {
        return [
            'tags.array' => 'Les tags doivent être fournis sous forme de tableau',
            'tags.*.string' => 'Les valeurs des tags doivent être des chaînes de caractères',
            'customValues.array' => 'Les préférences personnalisées doivent être fournies sous forme de tableau',
            'customValues.*.category.required_with' => 'La catégorie est requise pour chaque préférence personnalisée',
            'customValues.*.value.required_with' => 'La valeur est requise pour chaque préférence personnalisée'
        ];
    }
}
