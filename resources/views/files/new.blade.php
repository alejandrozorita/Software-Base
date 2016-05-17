@extends('layout')

@section('title'){{Config::get('constantes.cliente')}} - Crear Fichero @stop

@section('CSSHeader')
@stop

@section('contenido')

<div class="row">
	@if(count($errors) > 0)
		<div class="alert alert-danger">
			<ul>
				@foreach($errors->all() as $error)
					<li>{{ $error }}</li>
				@endforeach
			</ul>
		</div>
	@endif
</div>
<div class="row">
	{!! Form::open(['route' => 'ficheros.store', 'method' => 'POST']) !!}
	<div class='col-md-4'>
		{!! Form::label('asunto','Asunto') !!}
		{!! Form::text('asunto',null,['placeholder' => 'Asunto del fichero', 'class' => 'form-control']) !!}
	</div>
	<div class='col-md-4'>
		{!! Form::label('cuerpo','Cuerpo') !!}
		{!! Form::text('cuerpo',null,['placeholder' => 'Cuerpo del fichero', 'class' => 'form-control']) !!}
	</div>
	<div class='col-md-4'>
		{!! Form::label('tipo','Tipo') !!}
		{!! Form::text('tipo',null,['placeholder' => 'Tipo de fichero', 'class' => 'form-control']) !!}
	</div>
	<div class='col-md-4'>
		{!! Form::submit('Subir', ['class' => 'btn btn-primary m-t-10']) !!}
	</div>
	
	{!! Form::close() !!}
</div>
	
		

		

		

		

	
@stop

@section('JSpage')
@stop