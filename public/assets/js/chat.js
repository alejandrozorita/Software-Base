/* Webarch Admin Dashboard 
 -----------------------------------------------------------------*/
    //var user_id= {{Auth::user->id}};
    var dominio = 'http://localhost:8888/Proyectos/AEDV-CCK-Desarrollo/backend';
    var image_pre = 'http://aedv.es/backend';
$(document).ready(function () {

    /* 
    $('.select2-choices').css('border', 'none');
    $('#s2id_autogen1').css('min-height', '0px');
    $('.select2-container').css('margin-top', '15px');
    $('.select2-container').css('margin-left', '10px');
    */
    $.ajax({
        url: dominio +'/users/getmessageusers',
        type: 'GET',
        //data: 'id='+currentCellText,
        dataType: 'json',
        success: function (data) {
            for (i = 0; i < data.length; i++)
            {
                if (data[i].id != user_id){
                    val = data[i].id + '|' + data[i].username + '|' + data[i].imagen + '|chat-item';
                    $("#multi").append('<option value="' + val + '">' + data[i].username + '</option>');
                }
            }

        }
    });


    var conversation = [];
    
    $('.user-details-wrapper').click(function () {
        set_user_details($(this).attr('data-user-name'), $(this).attr('data-chat-status'),$(this).attr('data-user-id'));
        var el = $('#messages-wrapper').parent('.scroll-content').show();
        if (el.length > 0) {
            $('#chat-users').parent().hide();
            $('#messages-wrapper').parent('.scroll-content').show();
        }
        else {
            $('#chat-users').hide();
        }
        $('#messages-wrapper').show();
        $('.chat-input-wrapper').show();
        $('.inner-scroll-content').empty();

        $('#messages-wrapper .chat-messages-header .status').addClass(status);
        $('#messages-wrapper .chat-messages-header span').text(username);
        $('#messages-wrapper .chat-messages-header').attr('data-user-id', userid);
        $('#messages-wrapper .chat-messages-header .chat-delete').off('click');
        $('#messages-wrapper .chat-messages-header .chat-delete').click(function(){ 
        if (confirm('Esta seguro de eliminar esta conversacion?'))
            deleteConversation(user_id,userid); });

    })

    $('.chat-back').click(function () {
        $('.inner-scroll-content').empty();
        $('#messages-wrapper .chat-messages-header .status').removeClass('online');
        $('#messages-wrapper .chat-messages-header .status').removeClass('busy');
        var el = $('#messages-wrapper').parent('.scroll-content').show();
        if (el.length > 0) {
            $('#chat-users').parent().show();
            $('#messages-wrapper').parent('.scroll-content').hide();
        }
        else {
            $('#chat-users').show();
        }
        $('#messages-wrapper').hide();
        $('.chat-input-wrapper').hide();
    })
    $('.bubble').click(function () {
        $(this).parent().parent('.user-details-wrapper').children('.sent_time').slideToggle();
    })
    $('#chat-message-input').keypress(function (e) {
        if (e.keyCode == 13)
        {
            sendto = $('#messages-wrapper .chat-messages-header').attr('data-user-id');
            send_message_ajax($(this).val(), sendto);
            $(this).val("");
            $(this).focus();
            e.preventDefault();
        }
    })
    $('#chat-users').scrollbar({
        ignoreMobile: true
    });
    $('.chat-messages').scrollbar({
        ignoreMobile: true
    });

});

function send_message_ajax(message, sendto) {
    $.ajax({
        data: "message_text="+message+"&sender_id="+user_id+"&receiver_id="+sendto+"&message_type=1",
        type: "POST",
        //dataType: "text/html",
        url: dominio +"/chat/public/index.php/messages/new",
    })
            .done(function (data, textStatus, jqXHR) {
                if (console && console.log) {
                    console.log("La solicitud se ha completado correctamente.");
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                if (console && console.log) {
                    console.log("La solicitud a fallado: " + textStatus);
                }
            });
}

function receive_messages() {
    var isVisible = $('#messages-wrapper').is(':visible');
    if (isVisible) {
        sendto = $('#messages-wrapper .chat-messages-header').attr('data-user-id');
        $.ajax({
            //data: {"message": message, "sender_id": userid, "receiver_id": sendto, "message_type": "1"},
            type: "GET",
            dataType: "json",
            url: dominio +"/messages/get/" + user_id + "/" + sendto,
        })
                .done(function (data, textStatus, jqXHR) {
                    for (i = 0; i < data.length; i++)
                     {
                        if ($(".chat-messages").find("[message-id='" + data[i].message_id + "']").length == 0 )
                            if (data[i].sender_id == user_id)
                                build_conversation(data[i].message_id, data[i].message, 0, "", "",data[i].created_at);
                            else
                                build_conversation(data[i].message_id, data[i].message, 1, "", "",data[i].created_at);
                    };
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    if (console && console.log) {
                        console.log("La solicitud a fallado: " + textStatus);
                    }
                });
    }

}


}
var timer=setInterval(function () {receive_messages()}, 2000);
function build_conversation(msgId ,msg, isOpponent, img, retina, time) {
    var t = time.split(/[- :]/);
    var date = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
    var meses = new Array ("Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");
    date = date.getDate()+' de '+meses[date.getMonth()]+' a las '+date.getHours()+':'+date.getMinutes()+'hs';

    if (isOpponent == 1) {
        $('.inner-scroll-content').append('<div class="user-details-wrapper" message-id ='+msgId+' >' +
                '<div class="user-profile">' +
                '<img src="' + image_pre + img + '"  alt="" data-src="' + image_pre + img + '" data-src-retina="' + image_pre + retina + '" width="35" height="35">' +
                '</div>' +
                '<div class="user-details">' +
                '<div class="bubble">' +
                msg +
                '</div>' +
                '</div>' +
                '<div class="clearfix"></div>' +
                '<div class="sent_time off">'+date+'</div>' +
                '</div>' +
                '</div>');
    }
    else {
        $('.inner-scroll-content').append('<div class="user-details-wrapper pull-right" message-id ='+msgId+' >' +
                '<div class="user-details">' +
                '<div class="bubble sender">' +
                msg +
                '</div>' +
                '</div>' +
                '<div class="clearfix"></div>' +
                '<div class="sent_time off" style="display: block;">'+date+'</div>' +
                '</div>')
    }

    $(".inner-scroll-content").animate({ scrollTop: $(document).height() }, "fast");

}
function set_user_details(username, status, userid) {
    $('#messages-wrapper .chat-messages-header .status').addClass(status);
    $('#messages-wrapper .chat-messages-header span').text(username);
    $('#messages-wrapper .chat-messages-header').attr('data-user-id', userid);
}

function send_message(msg) {
    $('.chat-messages').append('<div class="user-details-wrapper pull-right animated fadeIn" message-id=0>' +
            '<div class="user-details">' +
            '<div class="bubble old sender">' +
            msg +
            '</div>' +
            '</div>' +
            '<div class="clearfix"></div>' +
            '</div>')
}	

function deleteConversation(sender_id,receiver_id,message_type)
{
     $.ajax({
        data: "sender_id="+sender_id+"&receiver_id="+receiver_id+"&message_type="+message_type,
        type: "POST",
        url: dominio +"/messages/delete",
       
    }).done(function (data){ $('.inner-scroll-content').empty(); });
}