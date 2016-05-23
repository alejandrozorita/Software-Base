@include('includes.header')

@section('title'){{Config::get('constantes.cliente')}} @stop

@section('CSSHeader')
<link href="{{asset('asassets/plugins/pace/pace-theme-flash.css')}}" rel="stylesheet" type="text/css" media="screen"/>
@stop
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="error-body no-top lazy"  data-original="assets/img/work.jpg"  style="background-image: url('assets/img/work.jpg')">
<div class="container">
  <div class="row login-container animated fadeInUp">
        <div class="col-md-7 col-md-offset-2 tiles white no-padding">
         <div class="p-t-30 p-l-40 p-b-20 xs-p-t-10 xs-p-l-10 xs-p-b-10">
         {{--Mensaje de Log OUT--}}
         @if($errors->has())
        @foreach ($errors->all() as $error)
          @if($error != 'ok')
            <div class="alert alert-warning" role="alert">{{ $error }}</div>
          @else
            <div class="alert alert-success" role="alert">Solicitud enviada correctamente</div>
          @endif
        @endforeach
      @endif
         <div class="row">
         <div class="col-md-2"></div> 
         <div class="col-md-6"><img src="{{ asset('assets/img/logo-b.png') }}" width="300px" >
         <h3 class="normal"></h3></div>
         </div>
          
          <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}" class='animated fadeIn'>
                        {!! csrf_field() !!}
          
        </div>
            <div class="tiles grey p-t-20 p-b-20 text-black">
                <div class="row form-row m-l-20 m-r-20 xs-m-l-10 xs-m-r-10">
                    <div class="col-md-6 col-sm-6 ">
                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">

                                {{ Form::text('email',old('email'),array('id'=>"email", 'name'=>'email', 'class'=>"form-control",'placeholder' => Lang::get('password/login.nombre-usuario'))) }}

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>


                    <div class="col-md-6 col-sm-6">
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                {{ Form::password('password',array('id'=>'password', 'name'=>'password', 'class'=>'form-control','placeholder' => Lang::get('password/login.pass'))) }}

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row p-t-10 m-l-20 m-r-20 xs-m-l-10 xs-m-r-10">
                    <div class="control-group  col-md-8">
                        <div class="checkbox checkbox check-success"> <a href="{{ url('/password/reset') }}">{{Lang::get('password/login.recuperar-pass')}}</a>&nbsp;&nbsp;
                        <input type="checkbox" name="remember">
                          <label for="checkbox1">{{Lang::get('password/login.recordarme')}}</label>
                        </div>
                    <div class="checkbox checkbox check-success"> <a href="{{ url('/register') }}">Nuevo usuario</a>&nbsp;&nbsp;</div>
            
                </div>
            <div class="col-md-4">
              {{ Form::submit('Log in', ['class' => 'btn btn-primary btn-cons', 'style' => 'float:right', 'id'=>'login_toggle']) }}
            </div>
                  </div>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <h6>Ud. está accediendo al área privada de la AEDV. Si Ud. no es el propietario del usuario y contraseña que le autoriza a utilizar este acceso, no tiene autorización de acceso a esta plataforma.</h6>
            </div>
          </div>
              {{ FORM::close() }}
        </div>
      </div>
  </div>
</div>
<!-- END CONTAINER -->
<!-- BEGIN CORE JS FRAMEWORK-->

<!-- BEGIN CORE TEMPLATE JS -->
<!-- END CORE TEMPLATE JS -->
@section('JSpage')
<script src="asset('assets/plugins/boostrapv3/js/bootstrap.min.js') }}" type="text/javascript"></script>
<script src="asset('assets/plugins/pace/pace.min.js') }}" type="text/javascript"></script>
<script src="asset('assets/plugins/jquery-validation/js/jquery.validate.min.js') }}" type="text/javascript"></script>
<script src="asset('assets/plugins/jquery-lazyload/jquery.lazyload.min.js') }}" type="text/javascript"></script>
<script src="asset('assets/js/login_v2.js') }}" type="text/javascript"></script>

@stop
@include('includes.footer')

</body>

</html>
