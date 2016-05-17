<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alert extends Model
{
    //

	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'asunto', 'cuerpo', 'tipo','url'
    ];


    public function user(){
    	return $this->belongsTo(User::class);
    }
}
