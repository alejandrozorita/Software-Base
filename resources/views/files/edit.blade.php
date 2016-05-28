@extends('layout')

@section('title'){{Config::get('constantes.cliente')}} - Crear Fichero @stop

@section('CSSHeader')
@stop

@section('contenido')

<div class="row">
	@include('alerts.errors')
</div>
<div class="row">
	{!! Form::model($file, ['route' => ['ficheros.update', $file], 'method' => 'PUT']) !!}
		
		@include('files.form')

	<div class='col-md-4'>
		{!! Form::submit('Subir', ['class' => 'btn btn-primary m-t-10']) !!}
	</div>
	<div class='col-md-4'>
		<a href="{{ route('ficheros.index') }}" class="btn btn-primary">Volver</a>
	</div>
	
	{!! Form::close() !!}
</div>
	

@stop

@section('JSpage')
@stop