
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: serverObject.status,
        xhrFields: {
            withCredentials: true
        },
        success: function(html){
            if (html.success != true) {
                $.ajax({
                    type: "GET",
                    url: serverObject.confirm+hash_key,
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function(html){
                        if (html == "ok") {
                            start_main();
                        }
                    }
                });
            }
        },
        error: function(html) {
            $.ajax({
                type: "GET",
                url: serverObject.confirm+hash_key,
                xhrFields: {
                    withCredentials: true
                },
                success: function(html){
                    if (html == "ok") {
                        start_main();
                    }
                }
            });
    }
    });
});




/*

 */
