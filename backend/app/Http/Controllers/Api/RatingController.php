<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RatingController extends Controller
{
    public function create(Request $request, $id)
    {
        $loggedInUser = Auth::user();

        $validator = Validator::make($request->all(), [
            'rating_value' => 'required|numeric|between:1,5',
            'review' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        if ($order->rating) {
            return response()->json(['message' => 'This order already has an associated review', 409]);
        }

        if ($loggedInUser->id !== (int) $order->user_id && $loggedInUser->role !== 'admin') {
            return response()->json(['message' => 'Forbidden to access this order.'], 403);
        }

        if ($order->order_status !== 'Done') {
            return response()->json(['message' => 'Action not allowed: Order is not complete yet.'], 403);
        }

        $rating = Rating::create([
            'user_id' => $loggedInUser->id,
            'service_id' => $order->service_id,
            'order_id' => $order->id,
            'rating_value' => $request->rating_value,
            'review' => $request->review,
        ]);

        return response()->json([
            'message' => 'Rating added successfully',
            'data' => $rating
        ], 201);
    }

    public function show($id)
    {
        $rating = Rating::find($id);

        if (!$rating) {
            return response()->json(['message' => 'Rating not found'], 404);
        }

        return response()->json([
            'message' => 'Get rating successfully',
            'data' => $rating
        ], 200);
    }
}
