<?php

namespace App\Http\Controllers;

use App\Http\Requests\Addresses\StoreAddressRequest;
use Illuminate\Http\RedirectResponse;

class AddressController extends Controller
{
    public function store(StoreAddressRequest $request): RedirectResponse
    {
        try {
            $address = $request->user()->addresses()->create($request->validated());

            // Si c'est la première adresse ou si is_default est true
            if ($request->boolean('is_default') || $request->user()->addresses()->count() === 1) {
                $request->user()->addresses()
                    ->where('id', '!=', $address->id)
                    ->update(['is_default' => false]);

                $address->update(['is_default' => true]);
            }

            return back()->with('success', 'Adresse ajoutée avec succès');
        } catch (\Exception $e) {
            return back()->with('error', 'Une erreur est survenue');
        }
    }

    public function update(StoreAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            if ($address->user_id !== $request->user()->id) {
                return back()->with('error', 'Non autorisé');
            }

            $address->update($request->validated());

            if ($request->boolean('is_default')) {
                $request->user()->addresses()
                    ->where('id', '!=', $address->id)
                    ->update(['is_default' => false]);
            }

            return back()->with('success', 'Adresse mise à jour avec succès');
        } catch (\Exception $e) {
            return back()->with('error', 'Une erreur est survenue');
        }
    }

    public function destroy(Address $address): RedirectResponse
    {
        try {
            if ($address->user_id !== auth()->id()) {
                return back()->with('error', 'Non autorisé');
            }

            if (auth()->user()->addresses()->count() === 1) {
                return back()->with('error', 'Vous devez avoir au moins une adresse');
            }

            $address->delete();

            return back()->with('success', 'Adresse supprimée avec succès');
        } catch (\Exception $e) {
            return back()->with('error', 'Une erreur est survenue');
        }
    }
}
