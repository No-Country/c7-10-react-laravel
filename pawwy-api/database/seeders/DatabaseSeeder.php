<?php

namespace Database\Seeders;
use Illuminate\Support\Str;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

         \App\Models\User::factory()->create([
            'name' => 'Pawwy',
            'email' => 'admin@pawwy.free.com', 
            'lastName' =>  'admin',  
            'email_verified_at' => now(),
            'password' => bcrypt('0123456789'),  
            'phone' => Str::random(10), 
            'state' => true,   
            'rol' => 'admin',      
            'remember_token' => Str::random(10),  
         ]);
         
         \App\Models\User::factory(10)->create();
    }
}
