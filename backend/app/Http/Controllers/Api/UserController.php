<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    function updateProfile(Request $request, $id)
    {
        $loggedInUser = Auth::user();

        if ($loggedInUser->id !== (int) $id && $loggedInUser->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized to update this user.'
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'phone' => 'nullable|string|max:15',
            'address' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::findOrFail($id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->address = $request->address;

        $user->save();

        return response()->json([
            'message' => 'User updated successfully',
            'data' => $user,
        ], 200);
    }

    public function updatePassword(Request $request, $id)
    {
        $loggedInUser = Auth::user();

        if ($loggedInUser->id !== (int) $id && $loggedInUser->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized to update this user.'
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'new_password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::findOrFail($id);

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'message' => 'Current password is incorrect.'
            ], 403);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json([
            'message' => 'Password updated successfully.'
        ], 200);
    }

    public function deleteUser($id)
    {
        $loggedInUser = Auth::user();

        if ($loggedInUser->id !== (int) $id && $loggedInUser->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized to delete this user.'
            ], 403);
        }

        $user = User::findOrFail($id);

        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully.'
        ], 200);
    }
}
