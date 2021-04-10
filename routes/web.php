<?php

use App\Http\Controllers\filterPlanetController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\planetController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('welcome');
});


Route::resource('planet',planetController::class);

Route::get('/search/planet/{name}', [filterPlanetController::class, 'show']);
Route::get('/sort/planet/{method}', [filterPlanetController::class, 'sort']);
