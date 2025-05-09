<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PromoCode extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'code',
        'type',
        'value',
        'max_uses',
        'times_used',
        'starts_at',
        'expires_at',
        'is_active'
    ];

    protected $casts = [
        'starts_at' => 'datetime',
        'expires_at' => 'datetime',
        'active' => 'boolean',
    ];

    public function isValid(): bool
    {
        if (!$this->is_active) {
            return false;
        }

        if ($this->max_uses && $this->times_used >= $this->max_uses) {
            return false;
        }

        if ($this->starts_at && $this->starts_at->isFuture()) {
            return false;
        }

        if ($this->expires_at && $this->expires_at->isPast()) {
            return false;
        }

        return true;
    }

    public function calculateDiscount(float $subtotal): float
    {
        if ($this->type === 'percentage') {
            return $subtotal * ($this->value / 100);
        }

        return $this->value;
    }
}
