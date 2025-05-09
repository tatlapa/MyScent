<?php

return [
    'title' => 'Your Cart',
    'items_count' => ':count item(s)',
    'order_summary' => [
        'title' => 'Order Summary',
        'subtotal' => 'Subtotal',
        'shipping' => 'Shipping',
        'tax' => 'Tax (20%)',
        'total' => 'Total',
        'checkout' => 'Proceed to Checkout'
    ],
    'trust_features' => [
        'secure_payment' => [
            'title' => '100% Secure Payment',
            'description' => 'Your data is protected with SSL encryption. We accept all major credit cards.'
        ],
        'express_delivery' => [
            'title' => 'Express Delivery',
            'description' => 'Free shipping on orders over $99. Real-time order tracking.'
        ],
        'free_returns' => [
            'title' => 'Free Returns',
            'description' => '30-day money-back guarantee. Free returns with no questions asked.'
        ],
        'customer_service' => [
            'title' => 'Premium Customer Service',
            'description' => 'Dedicated support team available 7 days a week to assist you.'
        ]
    ],
    'empty_message' => 'Your cart is empty.',
    'empty_suggestion' => 'Explore our collection and add items to your cart.',
    'continue_shopping' => 'Continue Shopping',
    'promo_code' => [
        'title' => 'Promo Code',
        'button' => 'Apply',
        'invalid' => 'The promo code is invalid.',
        'expired_invalid' => 'This promo code has expired or is no longer valid.',
        'valid' => 'Promo code successfully applied.',
        'removed' => 'Promo code successfully removed.',
    ]
];
