<?php

namespace App\Http\Controllers;


use App\Services\CurrencyService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Cart;

class CartController extends Controller
{
    protected $cart;
    protected $currencyService;

    public function __construct(CurrencyService $currencyService)
    {
                Cart::clear();
        Cart::add(455, 'Sample Item', 100, 1);

        $this->currencyService = $currencyService;
        $currentCurrency = session('currency', 'USD');

        $items = Cart::getContent()->map(function ($item) use ($currentCurrency) {
            $displayItem = clone $item;

            $item->attributes['display_price'] = $this->currencyService->convert(
                $item->price,
                'USD',
                $currentCurrency
            );

            return $displayItem;
        });


        $this->cart = (object)[
            'count' => Cart::getTotalQuantity(),
            'items' => $items,
            'total' => $this->currencyService->convert(Cart::getTotal(), 'USD', $currentCurrency),
            'subtotal' => $this->currencyService->convert(Cart::getSubTotal(), 'USD', $currentCurrency),
            'tax' => $this->currencyService->convert(Cart::getTotal() * 0.20, 'USD', $currentCurrency),
            'shipping' => $this->currencyService->convert(5.99, 'USD', $currentCurrency),
            'currency' => $currentCurrency,
            'conditions' => Cart::getConditions()->map(function ($condition) use ($currentCurrency) {
                return [
                    'name' => $condition->getName(),
                    'type' => $condition->getType(),
                    'target' => $condition->getTarget(),
                    'value' => $condition->getValue(),
                    'calculatedValue' => $this->currencyService->convert(
                        $condition->getCalculatedValue(Cart::getSubTotal()),
                        'USD',
                        $currentCurrency
                    ),
                    'attributes' => $condition->getAttributes(),
                    'order' => $condition->getOrder()
                ];
            })->values()->toArray()
        ];

        Inertia::share('cart', $this->cart);

//        dd($this->cart);


//        dd(Cart::getTotalQuantity());
//        $cartItem = Cart::add(455, 'Sample Item', 100.99, 2, array())->associate('Product');
        // il faut associer avec le model generation
    }

    public function index()
    {
        return Inertia::render('cart/Index');
    }

    public function checkout()
    {
        if (Cart::getTotalQuantity() <= 0) {
            return redirect()->route('cart.index');
        }

        return Inertia::render('cart/Checkout', [
            'addresses' => auth()->check() ? auth()->user()->addresses : [],
            'shippingMethods' => null,
        ]);
    }

    public function remove($id)
    {
        Cart::remove($id);
        return redirect()->back();
    }

    public function updateQuantity($id, Request $request)
    {
        $quantity = $request->quantity;
        if ($quantity > 0) {
            Cart::update($id, [
                'quantity' => [
                    'relative' => false,
                    'value' => $quantity
                ]
            ]);
        }
        return redirect()->back();
    }
}
