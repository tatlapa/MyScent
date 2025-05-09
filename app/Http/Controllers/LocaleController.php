<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\App;

class LocaleController extends Controller
{
    public function index()
    {

    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'locale' => [
                'required',
                Rule::exists('countries', 'code')->where('is_active', true)
            ]
        ]);

        session(['locale' => $validated['locale']]);
        App::setLocale($validated['locale']);
        $locale = App::currentLocale();

        Cache::forget('locale_' . session()->getId());
        Cache::rememberForever(
            'locale_' . session()->getId(),
            fn() => $validated['locale']
        );

        return redirect()->back();
    }
}
