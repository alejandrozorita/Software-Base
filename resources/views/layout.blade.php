@include('includes.header')
<!-- END HEAD -->

<!-- BEGIN BODY -->
<body class="">

<!-- BEGIN HEADER -->
<div class="header navbar navbar-inverse ">
  <!-- BEGIN TOP NAVIGATION BAR -->
  @include('includes.cabecera')

  <!-- END TOP NAVIGATION BAR -->
</div>
<!-- END HEADER -->
<!-- BEGIN CONTAINER -->
<div class="page-container row-fluid">
  <!-- BEGIN SIDEBAR -->
  <div class="page-sidebar" id="main-menu">
  <!-- BEGIN MINI-PROFILE -->
   <div class="page-sidebar-wrapper scrollbar-dynamic" id="main-menu-wrapper">
   <div class="user-info-wrapper">
	<div class="profile-wrapper">
		<img src="{{Config::get('constantes.ruta_ficheros_usuarios')}}{{Auth::user()->imagen}}"  alt="{{Auth::user()->nombre}}" width="69" height="69" />
	</div>
    <div class="user-info">
      <div class="greeting">{{ Lang::get('layout.bienvenido') }}</div>
      <div class="username">{{ Auth::user()->nombre }} <span class="semi-bold">{{ Auth::user()->apellidos }}</span></div>
      <div class="status"></div>
    </div>
   </div>
  <!-- END MINI-PROFILE -->
   <!-- BEGIN SIDEBAR MENU -->
    @include('includes.menu_izq')

	<div class="clearfix"></div>
    <!-- END SIDEBAR MENU -->
  </div>
  </div>

  <!-- END SIDEBAR -->

  <div class="page-content">
    <div class="content" style="margin-bottom: 80px;">
      @yield('contenido')
    </div>
  </div>


{{--  @include('includes.chat') --}}

<!-- END CONTAINER -->
@include('includes.footer')
<!-- END CORE TEMPLATE JS -->
</body>
</html>

