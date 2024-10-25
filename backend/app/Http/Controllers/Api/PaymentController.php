<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Midtrans\Config;
use Midtrans\CoreApi;
use Midtrans\Notification;
use Midtrans\Transaction;

class PaymentController extends Controller
{
    public function __construct()
    {
        Config::$serverKey = config('services.midtrans.serverKey');
        Config::$clientKey = config('services.midtrans.clientKey');
        Config::$isProduction = config('services.midtrans.isProduction');
        Config::$isSanitized = config('services.midtrans.isSanitized');
        Config::$is3ds = config('services.midtrans.is3ds');
    }
    public function payWithCreditCard(Request $request)
    {
        $loggedInUser = Auth::user();

        $order = Order::find($request->order_id);

        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        if ($loggedInUser->id !== (int) $order->user_id && $loggedInUser->role !== 'admin') {
            return response()->json([
                'message' => 'Forbidden to access this order.'
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'token_id' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $params = [
            'payment_type' => 'credit_card',
            'credit_card' => [
                'token_id' => $request->token_id,
                'authentication' => true
            ],
            'transaction_details' => [
                'order_id' => $order->id,
                'gross_amount' => $order->gross_amount,
            ],
            'item_details' => [
                [
                    'id' => $order->service->id,
                    'price' => $order->service->price,
                    'name' => $order->service->name,
                    'quantity' => 1,
                ]
            ],
            'customer_details' => [
                'first_name' => $order->order_name,
                'email' => $order->order_email,
                'phone' => $order->order_phone,
            ],
        ];

        try {
            $response = CoreApi::charge($params);

            $transactionTime = $response->transaction_time;

            $expiryTime = Carbon::createFromFormat('Y-m-d H:i:s', $transactionTime)->addDay();

            $payment = Payment::create([
                'order_id' => $order->id,
                'status' => 'pending',
                'payment_type' => 'credit_card',
                'expiry_time' => $expiryTime,
                'redirect_url' => $response->redirect_url
            ]);

            return response()->json([
                'message' => 'Payment added successfully',
                'data' => $payment,
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function payWithVirtualAccount(Request $request)
    {
        $loggedInUser = Auth::user();

        $order = Order::find($request->order_id);

        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        if ($loggedInUser->id !== (int) $order->user_id && $loggedInUser->role !== 'admin') {
            return response()->json([
                'message' => 'Forbidden to access this order.'
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'bank' => 'required|in:bca,bni,bri,mandiri,permata,cimb',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $params = [
            'transaction_details' => [
                'order_id' => $order->id,
                'gross_amount' => $order->gross_amount,
            ],
            'item_details' => [
                [
                    'id' => $order->service->id,
                    'price' => $order->service->price,
                    'name' => $order->service->name,
                    'quantity' => 1,
                ]
            ],
            'customer_details' => [
                'first_name' => $order->order_name,
                'email' => $order->order_email,
                'phone' => $order->order_phone,
            ],
        ];

        $payment_type = 'bank_transfer';

        if ($request->bank === 'bca' || $request->bank === 'bni' || $request->bank === 'bri' || $request->bank === 'cimb') {
            $params['payment_type'] = 'bank_transfer';
            $params['bank_transfer'] = [
                'bank' => $request->bank
            ];
        } else if ($request->bank === 'mandiri') {
            $payment_type = 'echannel';
            $params['payment_type'] = 'echannel';
            $params['echannel'] = [
                "bill_info1" => "Payment:",
                "bill_info2" => "Online purchase"
            ];
        } else if ($request->bank === 'permata') {
            $payment_type = 'permata';
            $params['payment_type'] = 'permata';
        }

        try {
            $response = CoreApi::charge($params);

            $transactionTime = $response->transaction_time;

            $expiryTime = Carbon::createFromFormat('Y-m-d H:i:s', $transactionTime)->addDay();

            $va_number = '';

            if ($request->bank === 'mandiri') {
                $va_number = $response->bill_key;
            } else if ($request->bank === 'permata') {
                $va_number = $response->permata_va_number;
            } else {
                $va_number = $response->va_numbers[0]->va_number;
            }

            $payment = Payment::create([
                'order_id' => $order->id,
                'status' => 'pending',
                'payment_type' => $payment_type,
                'va_number' => $va_number,
                'expiry_time' => $expiryTime,
            ]);

            return response()->json([
                'message' => 'Payment added successfully',
                'data' => $payment,
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function webhook(Request $request)
    {
        try {
            $notif = new Notification();
        } catch (\Exception $e) {
            exit($e->getMessage());
        }

        $notif = $notif->getResponse();
        $transaction = $notif->transaction_status;
        $order_id = $notif->order_id;

        $payment = Payment::where('order_id', $order_id)->firstOrFail();

        if ($payment->status === 'settlement' || $payment->status === 'capture') {
            return response()->json('Payment has been already processed');
        }

        if ($transaction === 'capture') {
            $payment->status = 'capture';
            $payment->order->order_status = 'On Process';
        } else if ($transaction === 'settlement') {
            $payment->status = 'settlement';
            $payment->order->order_status = 'On Process';
        } elseif ($transaction === 'pending') {
            $payment->status = 'pending';
        } elseif ($transaction === 'deny') {
            $payment->status = 'deny';
            $payment->order->order_status = 'Canceled';
        } elseif ($transaction === 'expire') {
            $payment->status = 'expire';
            $payment->order->order_status = 'Canceled';
        } elseif ($transaction === 'cancel') {
            $payment->status = 'cancel';
            $payment->order->order_status = 'Canceled';
        }

        $payment->save();
        $payment->order->save();

        return response()->json('success');
    }
}
