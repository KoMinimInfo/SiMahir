<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Progress extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'status_progress'
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
