<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
    // public function register(Request $req)
    // {
    //     $user = new User();
    //     $user->username = $req->input('username');
    //     $user->password = Hash::make($req->input('password'));
    //     $user->save();
    //     return $user;
    // }

    // public function login(Request $req)
    // {
    //     // $user = User::where('username', $req->username)->first();
    //     // if(!$user || !Hash::check($req->password, $user->password)) {
    //     //     return ["error"=>"Email or password is nor matched"];
    //     // }
    //     // return $user;

    //     $req->validate(
    //         [
    //             'username'    => 'required|string',
    //             'password' => 'required|string',
    //         ]
    //     );

    //     if (Auth::guard()->attempt($req->only('username', 'password'))) {
    //         $req->session()->regenerate();

    //         return response()->json([], 204);
    //     }

    //     return response()->json(['error' => 'Invalid credentials']);
    // }
}



