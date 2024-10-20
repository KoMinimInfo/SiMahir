<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'service_id',
        'order_name',
        'order_address',
        'order_phone',
        'order_notes',
        'gross_amount',
        'order_status'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
