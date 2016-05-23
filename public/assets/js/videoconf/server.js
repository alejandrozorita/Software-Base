var serverObject = {
    addr:     "aedv.es",
    port:   "8001",
    protocol:   "https://"
};
serverObject.ip       = serverObject.protocol+serverObject.addr+":"+serverObject.port;
serverObject.status   = serverObject.ip+"/status";
serverObject.confirm  = serverObject.ip+"/confirm/";
serverObject.set_word = serverObject.ip+"/room/set_word";
serverObject.has_word = serverObject.ip+"/room/has_word";
serverObject.files = serverObject.ip+"/files";
serverObject.chat = serverObject.ip+"/chat";
serverObject.room = serverObject.ip+"/room/";
serverObject.pub_link = serverObject.ip+"/file/get/";
serverObject.create = serverObject.ip+"/room/create";
serverObject.file = serverObject.ip+"/file";

function fix_duplicate(temp1) {
    if (typeof temp1 == 'undefined') {
        console.log('INDEFINIDO');
        return;
    }

    is_ = [];
    jQuery('.col-vid').each( function(ele) {
        var sem = true;
        is_.push(jQuery(this).attr('id'));
    });


    is_.forEach( function (ele) {
        var sem = true;
        var i_ = ele;

        jQuery.each(temp1,function(k,v){
            if (i_ == k) {
                sem = false;

                var all_rep = [];
                jQuery.each(temp1,function(s,d) {
                    if (v.user == d.user && is_.indexOf(s) >= 0 ) {
                        all_rep.push(s);
                    }
                });
                all_rep.forEach( function(ke, val) {
                    if (val != all_rep.length - 1) {
                        if (jQuery('#'+ke).length) jQuery('#'+ke).remove();
                    }
                });

            }
        });

        if (sem) {
            console.log(i_);
            jQuery('#'+i_).remove();
        }
    });
}
