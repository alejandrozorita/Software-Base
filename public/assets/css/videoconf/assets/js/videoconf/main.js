// grab the room from the URL
var webrtc;
/*var options = {
 width:800,
 height:500
 },
 //init the drawpad
 dp = new DrawingPad(options);
 dp.init("#drawingPad");*/

function start_main() {
    var inputFileContainer, inputFileSubmit, room, shareScreenButton;
    room = location.search && location.search.split('?')[1];
    shareScreenButton = $(".share-screen-button");
    shareScreenButton.click(function(){
        var self, jSelf;
        self = this;
        jSelf = $(self);
        if(jSelf.data("active")){
            jSelf.html(jSelf.data("original"));
            jSelf.data("active",false);
            webrtc.stopScreenShare();
            webrtc.startLocalVideo();
        }else{
            jSelf.html(jSelf.data("alternative"));
            jSelf.data("active",true);
            webrtc.shareScreen(function (err) {

            });
        }
    });
    /*
     * Questions
     */
    inputPreguntar = $(".preguntar-but");
    inputPreguntar.click(function(event){
        webrtc.connection.emit('preguntar', 'Preguntar al Profesor');
    });

    /*
     * Files
     */
    inputUploadBut = $(".btn-upload");
    inputSubmitBut = $(".btn-upload-submit");
    inputFileContainer = $("#input-file-file");
    inputFileSubmit = $("#input-submit-file");
    inputUploadBut.click( function() {
        inputFileContainer.click();
    });
    inputSubmitBut.click( function() {
        inputFileSubmit.click();
    });
    inputFileSubmit.click(function(event){
        var myFormData = new FormData();
        input = document.getElementById('input-file-file');
        console.log(input.files);
        name = jQuery('#name-file').val();
        myFormData.append('file', input.files[0]);
        myFormData.append('name', name);
        myFormData.append('room', room);
        $.ajax({
            url: serverObject.file,
            type: 'POST',
            data: myFormData,
            xhrFields: {
                withCredentials: true
            },
            processData: false,
            contentType: false,
            success: function(data) {
                webrtc.connection.emit('FileAdded', 'Refresh Files');
                refresh_files();
            }
        });
    });

    webrtc = new SimpleWebRTC({
        //peerConnectionConfig: 'https://192.168.0.203:8080',
        // the id/element dom element that will hold "our" video
        localVideoEl: 'localVideo',
        // the id/element dom element that will hold remote videos
        remoteVideosEl: '',
        // immediately ask for camera access
        autoRequestMedia: false,
        debug: false,
        detectSpeakingEvents: true,
        autoAdjustMic: false
    });
    console.log(room);

    $.ajax({
        type: "GET",
        url: serverObject.room+room,
        xhrFields: {
            withCredentials: true
        },
        success: function(html){
            console.log(html);
            if(html){
                if(html.status){
                    acceptedToEmit();
                }
            }
        }
    });
    function reload_hablar () {
        inputHablar =  $('#hablar-table').find(".hab-tr:last").find(".hablar-but");
        inputHablar.click(function(event){
            var ses = jQuery(this).attr('data-session-id');
            $.ajax({
                url: serverObject.set_word,
                type: 'POST',
                data: {room: room, session: ses},
                xhrFields: {
                    withCredentials: true
                },
                success: function (peers) {
                    console.log(peers);
                    console.log(ses);
                    webrtc.connection.emit('wordChanged', {peer:ses});
                },
                error: function (err) {
                    console.log(err);
                }
            });
        });
    }
    var glob_ch = 1;
    function acceptedToEmit(){

        $.ajax({
            type: "GET",
            url: serverObject.status,
            xhrFields: {
                withCredentials: true
            },
            success: function(html){
                var profesor = html.local.profesor;
                var access_key = html.local.key;
                webrtc.on('readyToCall', function () {
                    if (room) webrtc.joinRoom(room);
                });
                refresh_files();
                old_chat();
                profe_session();
                initMyCam(room);
                initBlackBoard();
                function showVolume(el, volume) {
                    if (!el) return;
                    if (volume < -45) { // vary between -45 and -20
                        el.style.height = '0px';
                    } else if (volume > -20) {
                        el.style.height = '100%';
                    } else {
                        el.style.height = '' + Math.floor((volume + 100) * 100 / 25 - 220) + '%';
                    }
                }
                webrtc.on('channelMessage', function (peer, label, data) {
                    if (data.type == 'volume') {
                        showVolume(document.getElementById('volume_' + peer.id), data.volume);
                    }
                });
                webrtc.connection.on('chat', function (peer, label, data) {
                    chat_cons(peer, label, data);
                });
                webrtc.connection.on('preguntado', function (peer, label, data) {
                    hablarTemplate = $("#hablar-template").html();
                    hablarContainer = $('#hablar-table');
                    var ob_t = Mustache.to_html(hablarTemplate, peer);
                    hablarContainer.append(Mustache.to_html(hablarTemplate, peer));
                    reload_hablar();
                });
                webrtc.connection.on('FileAdded', function() {
                    refresh_files();
                });
                webrtc.on('localScreenAdded', function (video) {

                });
                webrtc.on('localScreenRemoved', function (video) {

                });
                webrtc.on('videoAdded', function (video, peer) {
                    /*if(profesor == true){
                     var dataUpdateClients = {key:access_key,sessionid: webrtc.connection.getSessionid()};
                     webrtc.connection.emit("lemosbeta",dataUpdateClients);
                     }*/
                    $.ajax({
                        url: serverObject.has_word,
                        type: 'POST',
                        data: { room : room, session: peer.id},
                        xhrFields: {
                            withCredentials: true
                        },
                        success: function (peers) {
                            var remotes, profesor, test;
                            console.log(peer.id);
                            console.log(peers);
                            remotes = document.getElementById('remotes');
                            profesor = document.getElementById('profesor');
                            test = { test : 'username', peer: peer.id};
                            salaTemplate = $("#sala-template").html();
                            if (peers.success) {
                                jQuery(profesor).empty();
                                jQuery(profesor).html(Mustache.to_html(salaTemplate, test));
                                jQuery(profesor).find('.col-vid:last').find('.videoContainer').append(video);
                                video.onclick = function () {
                                    video.style.width = video.videoWidth + 'px';
                                    video.style.height = video.videoHeight + 'px';
                                };
                                video.muted = 0;
                            } else {
                                if (remotes) {
                                    if(jQuery("#"+test.peer).length == 0){
                                        jQuery(remotes).append(Mustache.to_html(salaTemplate, test));
                                        jQuery(remotes).find('.col-vid:last').find('.videoContainer').append(video);
                                        video.onclick = function () {
                                            video.style.width = video.videoWidth + 'px';
                                            video.style.height = video.videoHeight + 'px';
                                        };
                                        video.muted = 1;
                                    }
                                }
                            }
                            webrtc.connection.emit("getClients");
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                    //var remotes = document.getElementById('remotes');
                    //salaTemplate = $("#sala-template").html();

                    if (remotes) {
                        /*
                         var test = { test : 'username'};
                         jQuery(remotes).append(Mustache.to_html(salaTemplate, test));
                         jQuery(remotes).find('.col-vid:last').find('.videoContainer').append(video);
                         video.onclick = function () {
                         video.style.width = video.videoWidth + 'px';
                         video.style.height = video.videoHeight + 'px';
                         };
                         video.muted = 1;


                         /*
                         d.className = 'videoContainer';
                         d.id = peer.id;
                         d.appendChild(video);
                         var vol = document.createElement('div');
                         vol.id = 'volume_' + peer.id;
                         vol.className = 'volume_bar';
                         video.onclick = function () {
                         video.style.width = video.videoWidth + 'px';
                         video.style.height = video.videoHeight + 'px';
                         };
                         d.appendChild(vol);
                         remotes.appendChild(d);
                         */

                    }
                });
                webrtc.on('videoRemoved', function (video, peer) {
                    console.log('video removed ', peer);
                    var remotes = document.getElementById('remotes');
                    var el = document.getElementById(peer.id+"_video_incoming");
                    if (remotes && el) {
                        jQuery(el).closest('.col-vid').remove();
                    }
                });
                webrtc.on('volumeChange', function (volume, treshold) {
                    //console.log('own volume', volume);
                    showVolume(document.getElementById('localVolume'), volume);
                });

                // Since we use this twice we put it here
                function setRoom(name) {
                    $('form').remove();
                    $('h1').text(name);
                    $('#subTitle').text('Link to join: ' + location.href);
                    $('body').addClass('active');
                }

                if (room) {
                    setRoom(room);
                } else {
                    $('form').submit(function () {
                        var val = $('#sessionInput').val().toLowerCase().replace(/\s/g, '-').replace(/[^A-Za-z0-9_\-]/g, '');
                        webrtc.createRoom(val, function (err, name) {
                            console.log(' create room cb', arguments);

                            var newUrl = location.pathname + '?' + name;
                            if (!err) {
                                history.replaceState({foo: 'bar'}, null, newUrl);
                                setRoom(name);
                            } else {
                                console.log(err);
                            }
                        });
                        return false;
                    });
                }

                var button = $('#screenShareButton'),
                    setButton = function (bool) {
                        button.text(bool ? 'share screen' : 'stop sharing');
                    };
                webrtc.on('localScreenStopped', function () {
                    setButton(true);
                });

                setButton(true);

                button.click(function () {
                    if (webrtc.getLocalScreen()) {
                        webrtc.stopScreenShare();
                        setButton(true);
                    } else {
                        webrtc.shareScreen(function (err) {
                            if (err) {
                                setButton(true);
                            } else {
                                setButton(false);
                            }
                        });

                    }
                });
            }
        });
    }

    function refresh_files() {
        ficherosTemplate = $("#ficheros-template").html();
        ficherosContainer = $('#ficheros');
        $.ajax({
            url: serverObject.files,
            type: 'POST',
            data: { room : room},
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                var arr = [];
                try {
                    data.forEach( function(tm) {
                        ficherosContainer.empty();
                        var fich_ob = {
                            nombre: tm.name,
                            user: tm.user,
                            pub_link: serverObject.pub_link + tm._id
                        };
                        arr.push(fich_ob);
                    });
                    ficherosContainer.append(Mustache.to_html(ficherosTemplate, arr));
                } catch(err) {
                    console.log(err);
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    function old_chat() {
        $.ajax({
            url: serverObject.chat,
            type: 'POST',
            data: { room : room},
            xhrFields: {
                withCredentials: true
            },
            success: function (peers) {

                $.ajax({
                    url: serverObject.status,
                    type: 'GET',
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (data) {
                        try {
                            peers.forEach( function(tm) {
                                var UserID  = data._id;
                                var chat = tm;
                                var IncomTemplate =   $("#incomchat-template").html();
                                var CurrTemplate =  $("#currentch-template").html();
                                var ChatCont =  $('.chat-messages');

                                if (UserID == tm.from) {
                                    ChatCont.append(Mustache.to_html(CurrTemplate, tm));
                                } else {
                                    ChatCont.append(Mustache.to_html(IncomTemplate, tm));
                                }
                            });
                            //ficherosContainer.append(Mustache.to_html(ficherosTemplate, arr));
                        } catch(err) {
                            console.log(err);
                        }
                        scroll_toend()
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    function scroll_toend() {
        var box = document.getElementById('chat-messages');
        box.scrollTop = box.scrollHeight;
    }

    function chat_cons(peer, label, data) {
        $.ajax({
            url: serverObject.status,
            type: 'GET',
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                var UserID  = data._id;
                var chat = peer;
                var IncomTemplate =   $("#incomchat-template").html();
                var CurrTemplate =  $("#currentch-template").html();
                var ChatCont =  $('.chat-messages');

                if (UserID == peer.from) {
                    ChatCont.append(Mustache.to_html(CurrTemplate, peer));
                } else {
                    ChatCont.append(Mustache.to_html(IncomTemplate, peer));
                }
                scroll_toend();
            },
            error: function (err) {
                console.log(err);
            }
        });

    }

    function profe_session() {

        $.ajax({
            url: serverObject.set_word,
            type: 'POST',
            data: {room: room, session: webrtc.connection.getSessionid()},
            xhrFields: {
                withCredentials: true
            },
            success: function (peers) {
                console.log(peers);
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    function initBlackBoard(){
        var options = {
                width:800,
                height:500
            },
        dp = new DrawingPad(options);
        dp.init("#drawingPad");
    }
    function initMyCam(room){
        var peerID, localVideo, remotes,profesor, test, salaTemplate;
        peerID = webrtc.connection.getSessionid();
        localVideo = "<video id='localVideo' oncontextmenu='return false;'></video><div id='localVolume' class='volume_bar'></div>";
        $.ajax({
            url: serverObject.has_word,
            type: 'POST',
            data: { room : room, session: peerID},
            xhrFields: {
                withCredentials: true
            },
            success: function (peers) {
                remotes = document.getElementById('remotes');
                profesor = document.getElementById('profesor');
                test = { test : 'username', peer: peerID};
                salaTemplate = $("#sala-template").html();
                if(peers.success){
                    jQuery(profesor).empty();
                    jQuery(profesor).html(Mustache.to_html(salaTemplate, test));
                    jQuery(profesor).find('.col-vid:last').find('.videoContainer').append(localVideo);
                } else {
                    if (remotes) {
                        jQuery(remotes).append(Mustache.to_html(salaTemplate, test));
                        jQuery(remotes).find('.col-vid:last').find('.videoContainer').append(localVideo);
                    }
                }
                webrtc.startLocalVideo();
            },
            error: function (err) {
                console.log(err);
            }
        });

    }
}