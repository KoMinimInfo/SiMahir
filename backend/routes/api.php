<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\ProgressController;
use App\Http\Controllers\Api\RatingController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\UserController;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/login', function (Request $request) {
    return response()->json(['message' => 'Unauthorized'], 401);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{id}', [ServiceController::class, 'show']);

Route::post('/notification', [PaymentController::class, 'webhook']);

Route::middleware('auth:sanctum')->group(function () {
    Route::put('/users/{id}/update-password', [UserController::class, 'updatePassword']);
    Route::put('/users/{id}/update-profile', [UserController::class, 'updateProfile']);
    Route::put('/users/{id}/update-profile-picture', [UserController::class, 'updateProfilePicture']);
    Route::delete('/users/{id}/delete', [UserController::class, 'deleteUser']);

    Route::get('/orders', [OrderController::class, 'index']);
    Route::get('/orders/{id}', [OrderController::class, 'show']);
    Route::post('/orders', [OrderController::class, 'store']);
    Route::put('/orders/{id}', [OrderController::class, 'update']);

    Route::post('/payments/credit-card/{id}', [PaymentController::class, 'payWithCreditCard']);
    Route::post('/payments/virtual-account/{id}', [PaymentController::class, 'payWithVirtualAccount']);

    Route::post('/ratings/{id}', [RatingController::class, 'create']);
    Route::get('/ratings/{id}', [RatingController::class, 'show']);

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});


Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/services', [ServiceController::class, 'store']);
    Route::put('/services/{id}', [ServiceController::class, 'update']);
    Route::delete('/services/{id}', [ServiceController::class, 'destroy']);

    Route::post('/progress/{id}', [ProgressController::class, 'store']);
});
