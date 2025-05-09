<?php

namespace App\Http\Requests\Addresses;

use Illuminate\Foundation\Http\FormRequest;

class StoreAddressRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:20'],
            'street' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'state' => ['nullable', 'string', 'max:255'],
            'postal_code' => ['required', 'string', 'max:20'],
            'country' => ['required', 'string', 'max:255'],
            'is_default' => ['boolean'],
        ];
    }

    public function messages(): array
    {
        return [
            'firstname.required' => 'Le prénom est requis',
            'lastname.required' => 'Le nom est requis',
            'phone.required' => 'Le numéro de téléphone est requis',
            'street.required' => 'L\'adresse est requise',
            'city.required' => 'La ville est requise',
            'postal_code.required' => 'Le code postal est requis',
            'country.required' => 'Le pays est requis',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
