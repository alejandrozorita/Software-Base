<div class="navbar-inner">
	<div class="header-seperation">
		<ul class="nav pull-left notifcation-center" id="main-menu-toggle-wrapper" style="display:none">
		 <li class="dropdown"> <a id="main-menu-toggle" href="#main-menu"  class="" > <div class="iconset top-menu-toggle-white"></div> </a> </li>
		</ul>
      <!-- BEGIN LOGO -->
      <a href="{{ url('/') }}"><img src="{{ asset ('assets/img/logo.png')}}" class="logo" alt=""  data-src="{{ asset ('assets/img/logo.png')}}" data-src-retina="{{ asset ('assets/img/logo.png')}}" width="120"/></a>
      <!-- END LOGO -->
      <ul class="nav pull-right notifcation-center">
        <li class="dropdown" id="header_task_bar"> <a href="{{ url('/') }}" class="dropdown-toggle active" data-toggle=""> <div class="iconset top-home"></div> </a> </li>
		    <li class="dropdown" id="portrait-chat-toggler" style="display:none"> <a href="#sidr" class="chat-menu-toggle"> <div class="iconset top-chat-white "></div> </a> </li>
      </ul>
      </div>
      <!-- END RESPONSIVE MENU TOGGLER -->
      <div class="header-quick-nav" >
      <!-- BEGIN TOP NAVIGATION MENU -->
    	  <div class="pull-left">
          <ul class="nav quick-section">
            <li class="quicklinks"> 
              <a href="{{ Request::url() }}" class="" >
                <div class="iconset top-reload"></div>
              </a> 
            </li>
            <li class="quicklinks"> 
              <span class="h-seperate"></span>
            </li>
            <li class="quicklinks"> 
              <a href="#" class="" id="layout-condensed-toggle">
                <div class="iconset top-menu-toggle-dark"></div>
              </a>
            </li>
          </ul>
        </div>
	  <!-- END TOP NAVIGATION MENU -->
      	 <!-- BEGIN CHAT TOGGLER -->
            <div class="pull-right">
      	    @include('includes.notificaciones')
      		 <ul class="nav quick-section ">
      			<li class="quicklinks">
      				<a data-toggle="dropdown" class="dropdown-toggle  pull-right " href="#" id="user-options">
      					<div class="iconset top-settings-dark "></div>
      				</a>
      				<ul class="dropdown-menu  pull-right" role="menu" aria-labelledby="user-options">
                <li><a href="">{{Lang::get('includes/cabecera.mi-cuenta')}}</a>
                </li>
                <li><a href="">
                @if(isset($datos_vista['mensajes']))
                  {{Lang::get('includes/cabecera.mensajes')}}&nbsp;&nbsp;<span class="badge badge-important animated bounceIn">@if(isset($mensajes)) {{count($mensajes)}} @elseif(isset($datos_vista['mensajes'])) {{count($datos_vista['mensajes'])}} @endif </span></a>
                @endif
                </li>
                <li class="divider"></li>
                <li><a href="{{ url('/logOut') }}"><i class="fa fa-power-off"></i>&nbsp;&nbsp;{{Lang::get('includes/cabecera.salir')}}</a></li>
             </ul>
             <li class="quicklinks"> <span class="h-seperate"></span></li>
             <li class="quicklinks">  
      <a id="chat-menu-toggle" href="#sidr" class="chat-menu-toggle"><h5 style="text-decoration:none;margin-top:2px;"><b>CHAT</b><div class="top-chat-dark" style="float: right;margin-top: -2px;"><span class="badge badge-important animated bounceIn" id="chat-message-count"></span></div></h5>
      </a> 
      </li>
      </li>
      			</li>
      		</ul>
            </div>
      	   <!-- END CHAT TOGGLER -->
            </div>
            <!-- END TOP NAVIGATION MENU -->

        </div>