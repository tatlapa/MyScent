<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\LocaleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PromoCodeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::controller(CartController::class)->prefix('cart')->group(function () {
    Route::get('/', 'index')->name('cart.index');
    Route::get('/checkout', 'checkout')->name('cart.checkout');
    Route::delete('/cart/{id}', [CartController::class, 'remove'])->name('cart.remove');
    Route::patch('/cart/{id}/quantity', [CartController::class, 'updateQuantity'])->name('cart.updateQuantity');

    Route::controller(PromoCodeController::class)->prefix('promo')->group(function () {
        Route::post('/apply', 'apply')->name('cart.promo.apply');
        Route::delete('/remove', 'remove')->name('cart.promo.remove');
    });
});

Route::middleware(['auth'])->controller(AddressController::class)->prefix('addresses')->group(function () {
    Route::post('/', 'store')->name('addresses.store');
    Route::put('/{address}', 'update')->name('addresses.update');
    Route::delete('/{address}', 'destroy')->name('addresses.destroy');
});

Route::post('/currency', [CurrencyController::class, 'update'])->name('currency.update');
Route::post('/locale', [LocaleController::class, 'update'])->name('locale.update');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
