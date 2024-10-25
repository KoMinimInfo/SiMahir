<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Progress;
use Illuminate\Http\Request;

class ProgressController extends Controller
{
    public function store($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        $lastProgress = $order->progress->last();

        if (!$lastProgress) {
            return response()->json(['message' => 'No progress found for this order'], 404);
        }

        $nextProgress = null;

        if ($lastProgress->status_progress === 'Pesanan Diterima') {
            $nextProgress = 'Sedang Pengerjaan';
        } elseif ($lastProgress->status_progress === 'Sedang Pengerjaan') {
            $nextProgress = 'Finishing';
        } elseif ($lastProgress->status_progress === 'Finishing') {
            $nextProgress = 'Selesai';
        } else {
            return response()->json(['message' => 'Progress already done or invalid'], 400);
        }

        $progress = Progress::create([
            'order_id' => $order->id,
            'status_progress' => $nextProgress
        ]);

        return response()->json([
            'message' => 'Progress added successfully',
            'data' => $progress
        ], 201);
    }
}
