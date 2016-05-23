function start_main() {
    var createConfButton, serverIP, singleRoomListTemplate,singleRoomListLinkTemplate, roomListing, roomStatusChanger, createConfName, invitedListing;
    roomStatusChanger = ".room-status-changer";
    roomInviteChanger = "select.invite";
    singleRoomListTemplate = $("#single-room-list").html();
    singleRoomListLinkTemplate = $("#single-room-link").html();
    roomListing = $("#room-listing");
    serverIP = serverObject.ip+"/";
    createConfButton = $("#crear_conf");
    createConfName = $("#create-conf-name");
    invitedListing = $("#invited-container");

    function sel_update() {
        jQuery(roomInviteChanger).select2()
        u_se()
    }

    createConfButton.click(function () {
        var data;
        data = {
            name: createConfName.val()
        };
        $.ajax({
            type: "POST",
            data: data,
            url: serverIP + "room/create",
            xhrFields: {
                withCredentials: true
            },
            success: function (html) {
                console.log(html);
                $.ajax({
                    type: "POST",
                    url: serverIP + "app/list_user",
                    data: {app: app_id},
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (html1) {
                        value = html;
                        if (html1.success == true) {
                            usuarios = html1.response.users;
                                arr_inv = [];
                                var invites = html.invites;
                                usuarios.forEach(function (us) {
                                    is_selected = false;
                                    invites.forEach(function (inv) {
                                        if (us._id == inv) {
                                            is_selected = true;
                                        }
                                    });
                                    var ob_inv = {
                                        id: us._id,
                                        username: us.local.username,
                                        is_selected: is_selected
                                    }
                                    console.log(ob_inv);
                                    arr_inv.push(ob_inv);
                                });
                                value.invites = arr_inv;

                                roomListing.append(Mustache.to_html(singleRoomListTemplate, value));
                                sel_update();
                        }
                    }
                });
                //roomListing.append(Mustache.to_html(singleRoomListTemplate, html));
            }
        });
    });
    $(document).on("change", roomStatusChanger, function (event) {
        var select, roomID, status;
        select = $(event.target);
        roomID = select.data("room-id");
        select.attr("disabled", "disabled");
        //status = select.val();
        status = select.is(':checked');

        if (status == 1) {
            $.ajax({
                type: "GET",
                url: serverIP + "room/" + roomID + "/open",
                xhrFields: {
                    withCredentials: true
                },
                success: function (html) {
                    console.log(html);
                    select.removeAttr("disabled", "disabled");
                }
            });
        } else {
            $.ajax({
                type: "GET",
                url: serverIP + "room/" + roomID + "/close",
                xhrFields: {
                    withCredentials: true
                },
                success: function (html) {
                    console.log(html);
                    select.removeAttr("disabled", "disabled");
                }
            });
        }
    });
    
    function u_se() {
        $(document).on("removed", roomInviteChanger, function (event) {
            var select, roomID, status;
            select = $(event.target);
            roomID = select.data("room-id");
            select.attr("disabled", "disabled");
            st = event.val;
            $.ajax({
                        type: "POST",
                        data: {conference: roomID, user_id: st},
                        url: serverIP + "room/kick",
                        xhrFields: {
                            withCredentials: true
                        },
                        success: function (html) {
                            console.log(html);
                        }
                    });
            
            select.removeAttr("disabled", "disabled");
        });
    }

    $(document).on("change", roomInviteChanger, function (event) {
        var select, roomID, status;
        select = $(event.target);
        roomID = select.data("room-id");
        select.attr("disabled", "disabled");
        status = select.val();
        status.forEach( function(st) {
            $.ajax({
                type: "POST",
                data: {conference: roomID, user_id: st},
                url: serverIP + "room/invite",
                xhrFields: {
                    withCredentials: true
                },
                success: function (html) {
                    console.log(html);
                }
            });
        });
        select.removeAttr("disabled", "disabled");
    });
    initUI(function () {
        console.log("Rooms loaded");
    });
    function initUI(callback) {
        $.ajax({
            type: "GET",
            url: serverIP + "rooms",
            xhrFields: {
                withCredentials: true
            },
            success: function (html1) {
                console.log(html1);
                usuarios = {};
                $.ajax({
                    type: "POST",
                    url: serverIP + "app/list_user",
                    data: {app: app_id},
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (html) {
                        if (html.success == true) {
                            usuarios = html.response.users;
                            $.each(html1.rooms, function (index, value) {
                                arr_inv = [];
                                var invites = value.invites;
                                usuarios.forEach(function (us) {
                                    is_selected = false;
                                    invites.forEach(function (inv) {
                                        if (us._id == inv) {
                                            is_selected = true;
                                        }
                                    });
                                    var ob_inv = {
                                        id: us._id,
                                        username: us.local.username,
                                        is_selected: is_selected
                                    }
                                    console.log(ob_inv);
                                    arr_inv.push(ob_inv);
                                });
                                value.invites = arr_inv;
                                roomListing.append(Mustache.to_html(singleRoomListTemplate, value));
                                sel_update();
                            });
                            callback();

                        }
                    }
                });
            }
        });
        $.ajax({
            type: "GET",
            url: serverIP + "rooms/invited",
            xhrFields: {
                withCredentials: true
            },
            success: function (html) {
                console.log(html);
                html.forEach(function(room){
                    invitedListing.append(Mustache.to_html(singleRoomListLinkTemplate, room));
                })
            }
        });
    }
}