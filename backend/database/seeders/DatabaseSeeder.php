<?php

namespace Database\Seeders;

use App\Models\Service;
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
    }
}
