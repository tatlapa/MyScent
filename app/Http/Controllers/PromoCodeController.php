<?php

namespace App\Http\Controllers;

use App\Models\PromoCode;
use Illuminate\Http\Request;
use Cart;
use Darryldecode\Cart\CartCondition;

class PromoCodeController extends Controller
{
    public function apply(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string'
        ]);



        $promoCode = PromoCode::where('code', $validated['code'])->first();

        if (!$promoCode) {
            return redirect()->back()
                ->with('message', __('cart.promo_code.invalid'))
                ->with('status', 'error');
        }

        if (!$promoCode->isValid()) {
            return redirect()->back()
                ->with('message', __('cart.promo_code.expired_invalid'))
                ->with('status', 'error');
        }

        $currentConditions = Cart::getConditions();
        foreach ($currentConditions as $condition) {
            if ($condition->getType() === 'promo') {
                return redirect()->back()
                ->with('message', __('Un code promo est déjà appliqué sur votre panier'))
                    ->with('status', 'error');
            }
        }

        $condition = new CartCondition([
            'name' => 'Code Promo: ' . $promoCode->code,
            'type' => 'promo',
            'target' => 'total',
            'value' => $promoCode->type === 'percentage' ? "-{$promoCode->value}%" : "-{$promoCode->value}",
            'attributes' => [
                'code_id' => $promoCode->id,
            ]
        ]);

        Cart::condition($condition);

        // Increment times_used
        $promoCode->increment('times_used');

        return redirect()->back()->with('message', __('cart.promo_code.valid'))
            ->with('status', 'success');
    }

    public function remove()
    {
        $conditions = Cart::getConditions();
        foreach ($conditions as $condition) {
            if ($condition->getType() === 'promo') {
                Cart::removeCartCondition($condition->getName());
            }
        }

        return redirect()->back()->with([
            'success' => __('cart.promo_code.removed')
        ]);
    }
}
