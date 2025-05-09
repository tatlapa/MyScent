<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'google' => [
        'places_api_key' => env('GOOGLE_PLACES_API_KEY'),
    ],

    'amazon' => [
        'proxy_url' => env('AMAZON_PROXY_URL', 'https://api.allorigins.win/raw?url='),
        'cache_duration' => env('AMAZON_CACHE_DURATION', 3600),
        'rate_limit_delay' => env('AMAZON_RATE_LIMIT_DELAY', 500), // en millisecondes
    ],

    'groq' => [
        'api_key' => env('GROQ_API_KEY'),
        'api_url' => env('GROQ_API_URL'),
        'model' => env('GROQ_MODEL', 'mixtral-8x7b-32768'),
        'temperature' => env('GROQ_TEMPERATURE', 0.7),
        'max_tokens' => env('GROQ_MAX_TOKENS', 1000),
        'top_p' => env('GROQ_TOP_P', 1.0),
        'cache_duration' => env('GROQ_CACHE_DURATION', 3600),
    ],

    'gemini' => [
        'api_key' => env('GEMINI_API_KEY'),
        'api_url' => env('GEMINI_API_URL'),
        'temperature' => env('GEMINI_TEMPERATURE', 0.7),
        'max_tokens' => env('GEMINI_MAX_TOKENS', 1000),
        'cache_duration' => env('GEMINI_CACHE_DURATION', 3600),
    ],

    'comfyui' => [
        'base_url' => env('COMFYUI_BASE_URL', 'https://plannist.ai'),
    ]
];
