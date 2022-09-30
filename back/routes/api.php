<?php

use App\Http\Controllers\BasketController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\GuitarController;
use App\Http\Controllers\GuitarTypeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PickupsController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserModelController;
use App\Models\Order;
use App\Models\Pickups;
use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api'
], function ($router) {

    //BRAND
    Route::resource('brand', BrandController::class);

    //Country
    Route::resource('country', CountryController::class);

    //GuitarType
    Route::resource('guitarType', GuitarTypeController::class);

    //Pickups
    Route::resource('pickups', PickupsController::class);

    //Guitar
    Route::resource('guitar', GuitarController::class);
    Route::get('guitars/{id}', [GuitarController::class, 'index1']);
    Route::get('guitarsBrand/{id}', [GuitarController::class, 'index2']);
    Route::get('guitarsBrandType/{brandId}/{guitarTypeId}', [GuitarController::class, 'index3']);

    //User
    Route::resource('user', UserModelController::class);
    Route::get('userByEmail/{email}/{passwor}', [UserModelController::class, 'showByEmail']);

    //Basket
    Route::resource('basket', BasketController::class);
    Route::get('basketUser/{id}', [BasketController::class, 'index1']);

    //Order
    Route::resource('order', OrderController::class);
    Route::get('orderUser/{id}', [OrderController::class, 'index1']);

    //Review
    Route::resource('review', ReviewController::class);
    Route::get('reviewGuitar/{id}', [ReviewController::class, 'index2']);
    Route::get('reviewUser/{id}', [ReviewController::class, 'index3']);
});
