<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function register(Request $req)
    {
        $user = new User();
        $user->username = $req->input('username');
        $user->password = Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

    public function login(Request $req)
    {
        $user = User::where('username', $req->username)->first();
        if(!$user || !Hash::check($req->password, $user->password)) {
            return ["error"=>"Email or password is nor matched"];
        }
        return $user;
    }
}
