<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/s', function () {
    return view('welcome');
});


/*
|--------------------------------------------------------------------------
| Rutas de Login
|--------------------------------------------------------------------------
|
| Agrupamos todas las rutas de control de sesión
|
*/
Route::auth();
Route::get('/', ['as' => 'index', 'uses' => 'HomeController@index']);





/*
|--------------------------------------------------------------------------
| Rutas bajo login
|--------------------------------------------------------------------------
|
| Agrupamos todas las rutas bajo login
|
*/
Route::group(['middleware' => 'auth'], function () {

    /*
	|--------------------------------------------------------------------------
	| Rutas para los ficheros
	|--------------------------------------------------------------------------
	|
	| Here is where you can register all of the routes for an application.
	| It's a breeze. Simply tell Laravel the URIs it should respond to
	| and give it the controller to call when that URI is requested.
	|
	*/

	Route::resource('ficheros', 'FileController');
	

});
