/* Webarch Admin Dashboard 
-----------------------------------------------------------------*/	
$(document).ready(function() {	
	var conversation = [];

	 $('#chat-message-input').keypress(function(e){
		if(e.keyCode == 13)
		{
            webrtc.connection.emit('chat', $(this).val());
			$(this).val("");
			$(this).focus();
            e.preventDefault();
		}
	 })

    $('#chat-users').scrollbar({
        ignoreMobile:true
    });
    $('.chat-messages').scrollbar({
        ignoreMobile:true,
        autoScrollSize: true,
        disableBodyScroll: true
    });
   
});