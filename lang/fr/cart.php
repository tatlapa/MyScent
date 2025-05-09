<?php

return [
    'title' => 'Votre Panier',
    'items_count' => ':count article(s)',
    'order_summary' => [
        'title' => 'Récapitulatif de la commande',
        'subtotal' => 'Sous-total',
        'shipping' => 'Frais de livraison',
        'tax' => 'TVA (20%)',
        'total' => 'Total',
        'checkout' => 'Procéder au paiement'
    ],
    'trust_features' => [
        'secure_payment' => [
            'title' => 'Paiement 100% Sécurisé',
            'description' => 'Vos données sont protégées par le cryptage SSL. Nous acceptons toutes les cartes de crédit principales.'
        ],
        'express_delivery' => [
            'title' => 'Livraison Express',
            'description' => 'Livraison gratuite pour les commandes de plus de 99€. Suivi des commandes en temps réel.'
        ],
        'free_returns' => [
            'title' => 'Retours Gratuits',
            'description' => 'Garantie satisfait ou remboursé de 30 jours. Retours gratuits sans questions.'
        ],
        'customer_service' => [
            'title' => 'Service Client Premium',
            'description' => 'Équipe de support dédiée disponible 7 jours sur 7 pour vous assister.'
        ]
    ],
    'empty_message' => 'Votre panier est vide.',
    'empty_suggestion' => 'Parcourez notre collection et ajoutez des articles à votre panier.',
    'continue_shopping' => 'Continuer vos achats',
    'promo_code' => [
        'title' => 'Code Promo',
        'button' => 'Appliquer',
        'invalid' => 'Le code promo est invalide.',
        'expired_invalid' => 'Ce code promo a expiré ou n\'est plus valide.',
        'valid' => 'Code promo appliqué avec succès.',
        'removed' => 'Code promo retiré avec succès.',
    ]
];
