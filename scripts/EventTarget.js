$(document).on('touchmove',function (e){
    var container = $("#modal");
    if ( e.target.offsetParent!=null !== "modal"){
        close_modal();
    }
    if(e.target.offsetParent!=null && e.target.offsetParent.id !== "list_item_nav"){
        $('#chck-nav').prop('checked', false);
    }   
});

 $(document).on('mouseup',function (e){
    var container = $("#modal");
    if (e.target.offsetParent !=null && e.target.offsetParent.id !== "modal"){
        close_modal();
    }
    if(e.target.offsetParent!=null && e.target.offsetParent.id !== "list_item_nav"){
        $('#chck-nav').prop('checked', false);
    }
});

