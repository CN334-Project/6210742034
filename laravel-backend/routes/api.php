<?php

use App\Http\Controllers\API\EducationController;
use App\Http\Controllers\API\UserController;
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

Route::post('register', [UserController::class,'register']);
Route::post('login', [UserController::class,'login']);

// Route::get('education/{educationid}', [EducationController::class,'show']);
// Route::post('addEducations', [EducationController::class,'store']);
// Route::get('Alleducation', [EducationController::class,'index']);

Route::resource('educations', 'App\Http\Controllers\API\EducationController');
