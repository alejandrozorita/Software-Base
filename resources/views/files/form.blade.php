<div class='col-md-4'>
	 <div class="form-group{{ $errors->has('asunto') ? ' has-error' : '' }}">
	{!! Form::label('asunto','Asunto') !!}
	{!! Form::text('asunto',null,['placeholder' => 'Asunto del fichero', 'class' => 'form-control']) !!}
	 	@if ($errors->has('asunto'))
            <span class="help-block">
                <strong>{{ $errors->first('asunto') }}</strong>
            </span>
        @endif
    </div>
</div>
<div class='col-md-4'>
	<div class="form-group{{ $errors->has('cuerpo') ? ' has-error' : '' }}">
		{!! Form::label('cuerpo','Cuerpo') !!}
		{!! Form::text('cuerpo',null,['placeholder' => 'Cuerpo del fichero', 'class' => 'form-control']) !!}
		@if ($errors->has('cuerpo'))
            <span class="help-block">
                <strong>{{ $errors->first('cuerpo') }}</strong>
            </span>
        @endif
	</div>
</div>
<div class='col-md-4'>
	<div class="form-group{{ $errors->has('tipo') ? ' has-error' : '' }}">
		{!! Form::label('tipo','Tipo') !!}
		{!! Form::text('tipo',null,['placeholder' => 'Tipo de fichero', 'class' => 'form-control']) !!}
		@if ($errors->has('tipo'))
            <span class="help-block">
                <strong>{{ $errors->first('tipo') }}</strong>
            </span>
        @endif
	</div>
</div>