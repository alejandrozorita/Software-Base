<style type="text/css" media="screen">
   .sub-menu > li > a > .title
   {
      margin-left: 6px;
   }

</style>  
<ul>
   <li @if(Request::is('/')) class="start active" @endif >
      <a href="{{ url('/') }}" onclick="analytics('{{ url('/') }}','m_home')"><i class="icon-custom-home"></i><span class="title" >{{Lang::get('includes/menu-izq.escritorio')}}</span><span class="selected"></span></a>
   </li>
   <li class="start "> <a href="index.html" > <i class="icon-custom-home"></i> <span class="title">Usuarios</span> <span class="selected"></span> <span class="arrow open"></span> </a> 
      <ul class="sub-menu">
         <li > <a href="dashboard_v1.html"> Listado </a> </li>
         <li class="active"> <a href="index.html "> Crear <span class=" label label-info pull-right m-r-30">NEW</span></a></li>
       </ul>
   </li>

   <li class=""> <a href=""> <i class="fa fa-file"></i> <span class="title">Mensajes</span> <span class=" badge badge-disable pull-right ">203</span></a> </li>
   <li class="start "> <a href="" > <i class="icon-custom-home"></i> <span class="title">Ficheros</span> <span class="selected"></span> <span class="arrow open"></span> </a> 
      <ul class="sub-menu">
         <li class=""> <a href="{{ route('ficheros.index') }}"> <i class="fa fa-file"></i> <span class="title">Listado</span></a> </li>
         <li class="active"> <a href="{{ route('ficheros.create') }} "> Crear <span class=" label label-info pull-right m-r-30">NEW</span></a></li>
       </ul>
   </li>

   
</ul>