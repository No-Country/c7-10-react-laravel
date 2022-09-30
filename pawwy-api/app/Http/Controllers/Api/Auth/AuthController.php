<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use App\Mail\WelcomeMailable;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate(
            [
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]
        );

        $user = User::where('email', $data['email'])->first();

        if (! $user || ! Hash::check($data['password'], $user->password)) {
            throw ValidationException::withMessages(
                [
                    'requestError' => ['The provided credentials are incorrect.'],
                ]
            );
        }

        $token = $user->createToken('pawwy-app')->plainTextToken;

        return [
            'access_token' => $token,
            'user' => $user,
        ];
    }

    public function register(Request $request)
    {
        $data = $request->validate(
            [
                'name' => ['required'],
                'lastName' => ['required'],
                'email' => ['required', 'email'],
                'password' => ['required'], 
                'rol' => ['required'],
                'phone' => ['required'],
                'addres' => ['required'],
            ]
        );

        $data['src_image'] = 'default.png';
        $data['state']=true;

        $user = User::create(
            array_merge($data, ['password' => bcrypt($data['password'])])
        );
        $token = $user->createToken('pawwy-app')->plainTextToken;

        $email = new WelcomeMailable;
        Mail::to($data['email'] )->send( $email);
        return [
            'access_token' => $token,
            'user' => $user,
        ];
    }
}