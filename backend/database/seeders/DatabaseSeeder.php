<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Progress;
use App\Models\Rating;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([ServiceSeeder::class]);

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('Admin#1234'),
            'phone' => '6282299400249',
            'address' => 'Jl. Telekomunikasi 1',
            'role' => 'admin',
            'profile_picture' => 'images/users/AdminImage.jpg'
        ]);

        User::factory()->create([
            'name' => 'Customer',
            'email' => 'customer@gmail.com',
            'password' => Hash::make('Customer#1234'),
            'address' => 'Jl. Telekomunikasi 1',
            'role' => 'customer',
        ]);

        $users = [
            [
                'name' => 'Sahal Fajri',
                'email' => 'sahal123@gmail.com',
                'password' => 'Sahal#1234',
                'phone' => '6282299401234',
                'address' => 'Baleendah',
                'role' => 'customer',
            ],
            [
                'name' => 'Farid Ghani',
                'email' => 'ghani123@gmail.com',
                'password' => 'Ghani#1234',
                'phone' => '6285215331234',
                'address' => 'PBB',
                'role' => 'customer',
            ],
            [
                'name' => 'Mochammad Fadhlan Al-Ghiffari',
                'email' => 'fadhlan123@gmail.com',
                'password' => 'fadhlan#1234',
                'phone' => '6287864221234',
                'address' => 'Jl. Telekomunikasi 100',
                'role' => 'customer',
            ]
        ];

        foreach ($users as $index => $userData) {
            $user = User::factory()->create([
                'name' => $userData['name'],
                'email' => $userData['email'],
                'password' => Hash::make($userData['password']),
                'phone' => $userData['phone'],
                'address' => $userData['address'],
                'role' => $userData['role'],
            ]);

            for ($i = 1; $i <= 3; $i++) {
                $order = Order::create([
                    'user_id' => $user->id,
                    'service_id' => $index * 3 + $i,
                    'order_name' => $user->name,
                    'order_address' => $user->address,
                    'order_phone' => $user->phone,
                    'gross_amount' => 350000,
                    'order_status' => 'Done',
                ]);

                $progressStages = ['Pesanan Diterima', 'Sedang Pengerjaan', 'Finishing', 'Selesai'];
                foreach ($progressStages as $status) {
                    Progress::create([
                        'order_id' => $order->id,
                        'status_progress' => $status,
                    ]);
                }

                Rating::create([
                    'user_id' => $user->id,
                    'service_id' => $order->service_id,
                    'order_id' => $order->id,
                    'rating_value' => 5,
                    'review' => 'Mantab luar biasa',
                ]);
            }
        }
    }
}
