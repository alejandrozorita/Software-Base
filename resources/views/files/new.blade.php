@extends('layout')

@section('title'){{Config::get('constantes.cliente')}} - Crear Fichero @stop

@section('CSSHeader')
@stop

@section('contenido')

<div class="row">
	@include('alerts.errors')
</div>
<div class="row">
	{!! Form::open(['route' => 'ficheros.store']) !!}

		@include('files.form')
	
	<div class='col-md-4'>
		{!! Form::submit('Subir', ['class' => 'btn btn-primary m-t-10']) !!}
	</div>
	
	{!! Form::close() !!}
</div>
	

@stop

@section('JSpage')
@stop