<?php

use Illuminate\Support\Facades\Route;
use App\Mail\WelcomeMailable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
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
 Route::get('email', function (Request $request) {
    $request['email'] = 'email';
    $request['name'] = 'name';
    $request['lastName'] = 'lastName';
    $email = new WelcomeMailable($request->all());
     Mail::to("pawwyuser@gmail.com")->send( $email);
 });
