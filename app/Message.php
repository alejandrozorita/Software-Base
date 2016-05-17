<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //

	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'asunto', 'cuerpo'
    ];
    
    public function user(){
    	return $this->belongsTo(User::class);
    }
}
