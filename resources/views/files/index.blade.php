@extends('layout')

@section('title'){{Config::get('constantes.cliente')}} - Crear Fichero @stop

@section('CSSHeader')
@stop

@section('contenido')

<div class="row">
	@include('alerts.success')
</div>
<div class="row">
	<div class="col-md-8">
		<div class="table-responsive">
			<table class="table table-hover">
				<thead>
					<tr>
					 	<th>Asunto</th>
						<th>Cuerpo</th>
						<th>Tipo</th>
					</tr>
				</thead>
				<tbody>
				@if(isset($datos_vista['ficheros']))
					@foreach($datos_vista['ficheros'] as $fichero)
						@can('owner',$fichero)
						<tr>
							<td>{{ $fichero->asunto }}</td>
							<td>{{ $fichero->cuerpo }}</td>
							<td>{{ $fichero->tipo }}</td>
							<td>{{ link_to_route('ficheros.edit','Editar', $parameters = $fichero, $attributes = ['class' => 'btn btn-primary  ']) }}</td>
						</tr>
						@endcan
					@endforeach
				@endif
				</tbody>
			</table>
		</div>
	</div>
	
</div>

		

		

		

		

	
@stop

@section('JSpage')
@stop