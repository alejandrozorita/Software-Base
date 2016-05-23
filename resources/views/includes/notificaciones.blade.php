<style type="text/css">
  table br {display: none; margin-left: 5px;}
</style>
<div class="chat-toggler">
	<a href="#" class="dropdown-toggle" id="my-task-list" data-placement="bottom"  data-content='' data-toggle="dropdown" data-original-title="Alertas y Notificaciones">
		<div class="user-details">
			<div class="username">
        @if(isset($datos_vista['alertas']))
          @if(count($datos_vista['alertas']) != 0)
						<span class="badge badge-important">
              {{count($datos_vista['alertas'])}} 
            </span>
          @endif
        @endif
				<span class="bold">Alertas y Notificaciones</span>
			</div>
		</div>
		<div class="iconset top-down-arrow"></div>
	</a>
	<div id="notification-list" style="display:none;">
    <div style="width:300px; height: 700px;overflow: scroll;">
      {{--   <div onClick="location.href='{{route('alertas',[$alertas->id])}}'" class="notification-messages {{$notificacionClass}}"> --}}
        @if(isset($datos_vista['alertas']))
          <div class="user-profile">
              <img src="{{Config::get('constantes.ruta_ficheros_usuarios')}}{{$alertas->users->imagen}}"  alt="" width="35" height="35">
          </div>
          <div class="message-wrapper">
              <div class="heading">
                {{$alertas->titulo}}
              </div>
              <div style="br {display: none; margin-left: 5px}" class="description">
                  {{$alertas->texto}}
              </div>
              <div class="date pull-left">
              {{date_format($alertas->created_at, 'H:i d-m-Y')}}
              </div>
          </div>
        @endif
        <div class="clearfix"></div>
      </div>
		</div>
	</div>
	<div class="profile-pic">
		{{--  <img src="{{Config::get('constantes.ruta_ficheros_usuarios')}}{{Auth::user()->imagen}}"  alt=""  width="35" height="35" /> --}}
	</div>
</div>