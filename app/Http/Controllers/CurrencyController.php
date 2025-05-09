<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\Rule;

class CurrencyController extends Controller
{
    public function index()
    {
        return Currency::where('is_active', true)->get();
    }

    public function update(Request $request)
    {
        $request->validate([
            'currency' => [
                'required',
                Rule::exists('currencies', 'code')->where('is_active', true)
            ]
        ]);

        session(['currency' => $request->currency]);

        Cache::forget('currency_' . session()->getId());
        Cache::rememberForever(
            'currency_' . session()->getId(),
            fn() => $request->currency
        );

        return redirect()->back();
    }
}
