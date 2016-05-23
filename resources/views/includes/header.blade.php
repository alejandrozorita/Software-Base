<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<meta charset="utf-8" />
<title>@section('title'){{Config::get('constantes.cliente')}}@show</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta content="" name="author" />
<link rel="icon" type="image/png" href="{{ asset ('assets/img/favicon.png')}}" /> 
<!-- BEGIN PLUGIN CSS -->
<link href="{{ asset ('assets/plugins/bootstrap-select2/select2.css')}}" rel="stylesheet" type="text/css" media="screen"/>
@section('CSSHeader')
@show
<!-- END PLUGIN CSS -->
<!-- BEGIN CORE CSS FRAMEWORK -->
<link href="{{ asset ('assets/plugins/boostrapv3/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{ asset ('assets/plugins/boostrapv3/css/bootstrap-theme.min.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{ asset ('assets/plugins/font-awesome/css/font-awesome.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{ asset ('assets/css/animate.min.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{ asset ('assets/plugins/jquery-scrollbar/jquery.scrollbar.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{ asset ('assets/plugins/bootstrap-wysihtml5/wysiwyg-color.css')}}" rel="stylesheet" type="text/css"/>
<!-- END CORE CSS FRAMEWORK -->
<!-- BEGIN CSS TEMPLATE -->
<link href="{{ asset ('assets/css/style.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{ asset ('assets/css/responsive.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{ asset ('assets/css/custom-icon-set.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{ asset ('assets/css/magic_space.css')}}" rel="stylesheet" type="text/css"/>

<!-- END CSS TEMPLATE -->


<!-- Start of soporteaedv Zendesk Widget script -->
<script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(c){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("//assets.zendesk.com/embeddable_framework/main.js","soporteaedv.zendesk.com");
/*]]>*/</script>
<!-- End of soporteaedv Zendesk Widget script -->
</head>