{!! Form::open(['route' => ['ficheros.destroy',$fichero], 'method' => 'DELETE']) !!}

	{!! Form::submit('Eliminar', ['class' => 'btn btn-danger']) !!}
{!! Form::close() !!}