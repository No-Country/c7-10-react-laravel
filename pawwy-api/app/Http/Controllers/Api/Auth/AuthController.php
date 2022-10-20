<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
                    'email' => ['El correo o la contraseña con incorrectos.'],
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
                'email' => ['required', 'email','unique:users'],
                'password' => ['required'],
            ]
        );

        $user = User::create(
            array_merge($data, [
                'password' => bcrypt($data['password']),
                'src_image' => 'default.png',
                'state' => true
            ])
        );

        $token = $user->createToken('pawwy-app')->plainTextToken;

        $email = new WelcomeMailable($request->all());

        Mail::to($data['email'] )->send( $email);

        return [
            'access_token' => $token,
            'user' => $user,
        ];
    }

    public function logout(Request $request)
    {
        $user = Auth::user();

        $user->tokens()->delete();
        return response()->noContent();
    }
}
