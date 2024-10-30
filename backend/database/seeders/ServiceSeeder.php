<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::create([
            'name' => 'Bersih Rumah',
            'price' => 350000,
            'duration' => '1 - 2 Hari Pengerjaan',
            'image' => 'images/services/bersih-rumah.svg',
            'description' => 'Jasa membersihkan rumah secara menyeluruh, termasuk menyapu, mengepel, membersihkan kamar mandi, dapur, dan area lainnya.',
        ]);
        Service::create([
            'name' => 'Pengecatan Rumah',
            'price' => 350000,
            'duration' => '1 - 2 Hari Pengerjaan',
            'image' => 'images/services/pengecatan-rumah.svg',
            'description' => 'Layanan pengecatan ulang dinding rumah, baik interior maupun eksterior, dengan pilihan warna sesuai permintaan.',
        ]);
        Service::create([
            'name' => 'Perbaikan Kelistrikan',
            'price' => 350000,
            'duration' => '1 - 2 Hari Pengerjaan',
            'image' => 'images/services/perbaikan-kelistrikan.svg',
            'description' => 'Perbaikan berbagai masalah kelistrikan rumah, seperti korsleting, lampu mati, stop kontak rusak, dan instalasi baru.',
        ]);
        Service::create([
            'name' => 'Bantu Pindahan',
            'price' => 350000,
            'duration' => '1 - 2 Hari Pengerjaan',
            'image' => 'images/services/bantu-pindahan.svg',
            'description' => 'Bantuan tenaga untuk memindahkan barang-barang dari satu tempat ke tempat lain, termasuk bongkar pasang furnitur.',
        ]);
        Service::create([
            'name' => 'Perbaikan Pipa',
            'price' => 350000,
            'duration' => '1 - 2 Hari Pengerjaan',
            'image' => 'images/services/perbaikan-pipa.svg',
            'description' => 'Perbaikan pipa bocor, tersumbat, atau instalasi pipa baru untuk kamar mandi, dapur, dan area lainnya.',
        ]);
        Service::create([
            'name' => 'Desain Interior',
            'price' => 350000,
            'duration' => '1 - 2 Hari Pengerjaan',
            'image' => 'images/services/desain-interior.svg',
            'description' => 'Konsultasi dan desain interior untuk mengubah tampilan ruangan Anda menjadi lebih menarik dan fungsional.',
        ]);
        Service::create([
            'name' => 'Perbaikan Furnitur',
            'price' => 350000,
            'duration' => '1 - 2 Hari Pengerjaan',
            'image' => 'images/services/perbaikan-furnitur.svg',
            'description' => 'Perbaikan berbagai jenis furnitur seperti kursi, meja, lemari, dan lainnya agar kembali berfungsi dengan baik.',
        ]);
        Service::create([
            'name' => 'Perbaikan Jendela',
            'price' => 350000,
            'duration' => '1 - 2 Hari Pengerjaan',
            'image' => 'images/services/perbaikan-jendela.svg',
            'description' => 'Perbaikan jendela yang rusak, kendor, atau bocor, termasuk penggantian kaca jika diperlukan.',
        ]);
        Service::create([
            'name' => 'Perbaikan AC',
            'price' => 350000,
            'duration' => '1 - 2 Hari Pengerjaan',
            'image' => 'images/services/perbaikan-ac.svg',
            'description' => 'Perbaikan berbagai masalah pada AC, seperti tidak dingin, bocor, atau berisik, termasuk pengisian freon.',
        ]);
    }
}
