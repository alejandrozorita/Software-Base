<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<meta charset="utf-8" />
<title>
{{-- Título de la página --}}
@section('title') {{Config::get('constantes.cliente')}} @show
</title>

{{-- Contenido SEO --}}
@section('seo')
@show


<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta content="" name="description" />
<meta content="" name="author" />

{{-- Personalización de la página --}}  
@section('CSSpage')
@show

<!-- BEGIN CORE CSS FRAMEWORK -->
<link href="assets/plugins/boostrapv3/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="assets/plugins/boostrapv3/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css"/>
<link href="assets/plugins/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css"/>
<link href="assets/css/animate.min.css" rel="stylesheet" type="text/css"/>
<link href="assets/plugins/jquery-scrollbar/jquery.scrollbar.css" rel="stylesheet" type="text/css"/>

<!-- END CORE CSS FRAMEWORK -->

<!-- BEGIN CSS TEMPLATE -->

<link href="assets/css/style.css" rel="stylesheet" type="text/css"/>
<link href="assets/css/responsive.css" rel="stylesheet" type="text/css"/>
<link href="assets/css/custom-icon-set.css" rel="stylesheet" type="text/css"/>
<link href="assets/css/magic_space.css" rel="stylesheet" type="text/css"/>
<!-- END CSS TEMPLATE -->

</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="">
<!-- BEGIN HEADER -->
<div class="header navbar navbar-inverse ">
  <!-- BEGIN TOP NAVIGATION BAR -->
  <div class="navbar-inner">
    <div class="header-seperation">
      <ul class="nav pull-left notifcation-center" id="main-menu-toggle-wrapper" style="display:none">
        <li class="dropdown"> <a id="main-menu-toggle" href="#main-menu"  class="" >
          <div class="iconset top-menu-toggle-white"></div>
          </a> </li>
      </ul>
      <!-- BEGIN LOGO -->
      <a href="index.html"><img src="assets/img/logo.png" class="logo" alt=""  data-src="assets/img/logo.png" data-src-retina="assets/img/logo2x.png" width="106" height="21"/></a>
      <!-- END LOGO -->
      <ul class="nav pull-right notifcation-center">
        <li class="dropdown" id="header_task_bar"> <a href="index.html" class="dropdown-toggle active" data-toggle="">
          <div class="iconset top-home"></div>
          </a> </li>
        <li class="dropdown" id="header_inbox_bar" > <a href="email.html" class="dropdown-toggle" >
          <div class="iconset top-messages"></div>
          <span class="badge" id="msgs-badge">2</span> </a></li>
        <li class="dropdown" id="portrait-chat-toggler" style="display:none"> <a href="#sidr" class="chat-menu-toggle">
          <div class="iconset top-chat-white "></div>
          </a> </li>
      </ul>
    </div>
    <!-- END RESPONSIVE MENU TOGGLER -->
    <div class="header-quick-nav" >
      <!-- BEGIN TOP NAVIGATION MENU -->
      <div class="pull-left">
        <ul class="nav quick-section">
          <li class="quicklinks"> <a href="#" class="" >
            <div class="iconset top-reload"></div>
            </a> </li>
          <li class="quicklinks"> <span class="h-seperate"></span></li>
          <li class="quicklinks"> <a href="#" class="" >
            <div class="iconset top-tiles"></div>
            </a> </li>
          <li class="m-r-10 input-prepend inside search-form no-boarder"> <span class="add-on"> <span class="iconset top-search"></span></span>
            <input name="" type="text"  class="no-boarder " placeholder="Search Dashboard" style="width:250px;">
          </li>
        </ul>
      </div>
      <!-- END TOP NAVIGATION MENU -->
      <!-- BEGIN CHAT TOGGLER -->
      <div class="pull-right">
        <div class="chat-toggler"> <a href="#" class="dropdown-toggle" id="my-task-list" data-placement="bottom"  data-content='' data-toggle="dropdown" data-original-title="Notifications">
          <div class="user-details">
            <div class="username"> <span class="badge badge-important">3</span> John <span class="bold">Smith</span> </div>
          </div>
          <div class="iconset top-down-arrow"></div>
          </a>
          <div id="notification-list" style="display:none">
            <div style="width:300px">
              <div class="notification-messages info">
                <div class="user-profile"> <img src="assets/img/profiles/d.jpg"  alt="" data-src="assets/img/profiles/d.jpg" data-src-retina="assets/img/profiles/d2x.jpg" width="35" height="35"> </div>
                <div class="message-wrapper">
                  <div class="heading"> David Nester - Commented on your wall </div>
                  <div class="description"> Meeting postponed to tomorrow </div>
                  <div class="date pull-left"> A min ago </div>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="notification-messages danger">
                <div class="iconholder"> <i class="icon-warning-sign"></i> </div>
                <div class="message-wrapper">
                  <div class="heading"> Server load limited </div>
                  <div class="description"> Database server has reached its daily capicity </div>
                  <div class="date pull-left"> 2 mins ago </div>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="notification-messages success">
                <div class="user-profile"> <img src="assets/img/profiles/h.jpg"  alt="" data-src="assets/img/profiles/h.jpg" data-src-retina="assets/img/profiles/h2x.jpg" width="35" height="35"> </div>
                <div class="message-wrapper">
                  <div class="heading"> You haveve got 150 messages </div>
                  <div class="description"> 150 newly unread messages in your inbox </div>
                  <div class="date pull-left"> An hour ago </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <div class="profile-pic"> <img src="assets/img/profiles/avatar_small.jpg"  alt="" data-src="assets/img/profiles/avatar_small.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg" width="35" height="35" /> </div>
        </div>
        <ul class="nav quick-section ">
          <li class="quicklinks"> <a data-toggle="dropdown" class="dropdown-toggle  pull-right " href="#" id="user-options">
            <div class="iconset top-settings-dark "></div>
            </a>
            <ul class="dropdown-menu  pull-right" role="menu" aria-labelledby="user-options">
              <li><a href="user-profile.html"> My Account</a> </li>
              <li><a href="calender.html">My Calendar</a> </li>
              <li><a href="email.html"> My Inbox&nbsp;&nbsp;<span class="badge badge-important animated bounceIn">2</span></a> </li>
              <li class="divider"></li>
              <li><a href="login.html"><i class="fa fa-power-off"></i>&nbsp;&nbsp;Log Out</a></li>
            </ul>
          </li>
          <li class="quicklinks"> <span class="h-seperate"></span></li>
          <li class="quicklinks"> <a id="chat-menu-toggle" href="#sidr" class="chat-menu-toggle" >
            <div class="iconset top-chat-dark "><span class="badge badge-important hide" id="chat-message-count">1</span></div>
            </a>
            <div class="simple-chat-popup chat-menu-toggle hide" >
              <div class="simple-chat-popup-arrow"></div>
              <div class="simple-chat-popup-inner">
                <div style="width:100px">
                  <div class="semi-bold">David Nester</div>
                  <div class="message">Hey you there </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- END CHAT TOGGLER -->
    </div>
    <!-- END TOP NAVIGATION MENU -->
  </div>
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
        <div class="profile-wrapper"> <img src="assets/img/profiles/avatar.jpg"  alt="" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar2x.jpg" width="69" height="69" /> </div>
        <div class="user-info">
          <div class="greeting">Welcome</div>
          <div class="username">John <span class="semi-bold">Smith</span></div>
          <div class="status">Status<a href="#">
            <div class="status-icon green"></div>
            Online</a></div>
        </div>
      </div>
      <!-- END MINI-PROFILE -->
      <!-- BEGIN SIDEBAR MENU -->
      <p class="menu-title">BROWSE <span class="pull-right"><a href="javascript:;"><i class="fa fa-refresh"></i></a></span></p>


      @include('includes.menu')


      <div class="clearfix"></div>
      <!-- END SIDEBAR MENU -->
    </div>
  </div>

  <!-- END SIDEBAR -->
  <!-- BEGIN PAGE CONTAINER-->
  <div class="page-content">
    <!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
    <div id="portlet-config" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button"></button>
        <h3>Widget Settings</h3>
      </div>
      <div class="modal-body"> Widget settings form goes here </div>
    </div>
    <div class="clearfix"></div>
    <div class="content sm-gutter">
	  <div class="page-title">