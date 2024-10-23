<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function index()
    {
        $loggedInUser = Auth::user();

        if ($loggedInUser->role === 'admin') {
            $orders = Order::all();
        } else {
            $orders = $loggedInUser->orders;
        }

        return response()->json([
            'message' => 'Get orders successfully',
            'data' => $orders
        ], 200);
    }

    public function store(Request $request)
    {
        $loggedInUser = Auth::user();

        $service = Service::find($request->service_id);

        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'order_name' => 'required|string|max:255',
            'order_phone' => 'required|string|max:15',
            'order_address' => 'required|string',
            'order_notes' => 'nullable|string',

        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $order = Order::create([
            'user_id' => $loggedInUser->id,
            'service_id' => $service->id,
            'order_name' => $request->order_name,
            'order_phone' => $request->order_phone,
            'order_address' => $request->order_address,
            'order_notes' => $request->order_notes,
            'gross_amount' => $service->price,
            'order_status' => 'Pending'
        ]);

        return response()->json([
            'message' => 'Order added successfully',
            'data' => $order
        ], 201);
    }

    public function show($id)
    {
        $loggedInUser = Auth::user();

        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        if ($loggedInUser->id !== (int) $order->user_id && $loggedInUser->role !== 'admin') {
            return response()->json([
                'message' => 'Forbidden to access this order.'
            ], 403);
        }

        return response()->json([
            'message' => 'Get order successfully',
            'data' => $order
        ], 200);
    }
}
