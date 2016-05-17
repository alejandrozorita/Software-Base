<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function alerts(){
        return $this->hasMany(Alert::class);
    }

    public function messages(){
        return $this->hasMany(Message::class);
    }

    public function files(){
        return $this->hasMany(File::class);
    }


}
