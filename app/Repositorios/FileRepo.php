<?php
namespace App\Repositorios;

use App\File;

class FileRepo {

	public function buscar_todos()
	{
		return File::all();
	}

	public function buscar_usuario_enviado($user_id = null)
	{
		return File::where('user_id',$user_id)->get();
	}

	public function buscar_usuario_recibido($user_id = null)
	{
		return File::where('user_recibe',$user_id)->get();
	}
}

?>