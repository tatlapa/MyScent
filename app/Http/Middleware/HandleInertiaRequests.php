<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use Cart;
use App\Models\Currency;
use App\Models\Country;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'status' => fn () => $request->session()->get('status'),
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'cart' => [
                'count' => Cart::getTotalQuantity()
            ],
            'available_currencies' => Currency::getActive(),
            'available_countries' => Country::getActive(),
            'current_currency' => Cache::rememberForever(
                'currency_' . session()->getId(),
                fn() => session('currency', 'USD')
            ),
            'current_locale' => Cache::rememberForever(
                'locale_' . session()->getId(),
                fn() => session('locale', config('app.locale'))
            ),
        ];
    }
}
