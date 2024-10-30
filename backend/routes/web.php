<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // Logika untuk mengambil dan menampilkan dokumentasi API
    $routes = Route::getRoutes();

    // Ubah $routes->get() menjadi Collection
    $allRoutes = collect($routes->get());

    // Filter route yang ingin ditampilkan
    $apiRoutes = $allRoutes->filter(function ($route) {
        // Periksa apakah $route adalah objek dan memiliki properti 'uri'
        return is_object($route) && property_exists($route, 'uri') && strpos($route->uri, 'api/') === 0;
    });

    return view('welcome', ['routes' => $apiRoutes]);
});
