function close_modal(){
    $('#modal').css('display','none');
}
function open_modal(){
    $('#modal').css('display','block');
} 
function open_team(){
    $(".content_equipe").css("display","block");
}
function text_modal(nb_modal,nb_modal_soc){
    var modal = $('#modal');
    var modal_close = $('.btn_close_modal');
    var modal_btn_slide_img = $('.btn_slide_img_modal');
    var modal_header = $('.grid_modal_header');
    var modal_content = $('.grid_modal_content'); 
    var grid_modal = $(".grid_modal");
    var team_header = $(".content_team_header");
    var team_content = $(".content_team_content");
    
    if(nb_modal === 'TruckAccess_App' || nb_modal === 'TruckAccess_Web' || nb_modal === 'SlideShow_Societe'){
        
        modal.addClass("modal");
        modal.removeClass("modal_soc");
        modal_content.css({
            "color":"white",
            "height":"initial"
        });
        modal_close.css('color','white');
        modal_btn_slide_img.css('display','none');
        modal_header.css('margin','auto');
        modal_content.css('margin-top','1em');
    }
    
    if(nb_modal === 'TruckAccess_App'){       
        
        if(nb_modal_soc === 'planning'){
            modal_header.html('<img alt="" src="images/forModal/img_modal_appli.png">');
            modal_content.html("<div><ul><li><strong>Le planning complet synchronisé en temps réel avec l'ensemble des chauffeurs.</strong></li><li><strong>Un niveau de personnalisation extrême pour s'adapter aux spécificités métiers</strong></li></ul></div>");
            open_modal(); 
        }else if(nb_modal_soc === 'signature_demat'){
            modal_header.html('<img alt="" src="images/forModal/img_modal_sign.png">');
            modal_content.html("<div><ul><li><strong>Le planning complet synchronisé en temps réel avec l'ensemble des chauffeurs.</strong></li><li><strong>Un niveau de personnalisation extrême pour s'adapter aux spécificités métiers</strong></li></ul></div>");
            open_modal(); 
        }else if(nb_modal_soc === 'cb_rfid'){
            modal_header.html('<img alt="" src="images/forModal/img_modal_cb.png">');
            modal_content.html("<div><ul><li><strong>Le planning complet synchronisé en temps réel avec l'ensemble des chauffeurs.</strong></li><li><strong>Un niveau de personnalisation extrême pour s'adapter aux spécificités métiers</strong></li></ul></div>");
            open_modal(); 
        }else if(nb_modal_soc === 'chat'){
            modal_header.html('<img alt="" src="images/forModal/img_modal_chat.png">');
            modal_content.html("<div><ul><li><strong>Le planning complet synchronisé en temps réel avec l'ensemble des chauffeurs.</strong></li><li><strong>Un niveau de personnalisation extrême pour s'adapter aux spécificités métiers</strong></li></ul></div>");
            open_modal(); 
        }else if(nb_modal_soc === 'mod_spec'){
            modal_header.html('<img alt="" src="images/forModal/img_modal_mod_spec.png">');
            modal_content.html("<div><ul><li><strong>Le planning complet synchronisé en temps réel avec l'ensemble des chauffeurs.</strong></li><li><strong>Un niveau de personnalisation extrême pour s'adapter aux spécificités métiers</strong></li></ul></div>");
            open_modal(); 
        }
        else{
            console.log("error nothing link");
        }
        grid_modal.removeClass("slideShow_grid");
    }else if(nb_modal === 'TruckAccess_Web'){       
        
        if(nb_modal_soc === 'client'){
            modal_header.html('<img alt="" src="images/forModal/img_modal_client.png">');
            modal_content.html("<div><ul><li><strong>Traçabilité détaillée</strong></li><li><strong>Photos(CMR et réserves)</strong></li><li><strong>CMR dématérialisés</strong></li><li><strong>Saisie de commande</strong></li></ul></div>");
            open_modal(); 
        }else if(nb_modal_soc === 'sstr'){
            modal_header.html('<img alt="" src="images/forModal/img_modal_sstr.png">');
            modal_content.html("<div><ul><li><strong>Traçabilité détaillée</strong></li><li><strong>Photos(CMR et réserves)</strong></li><li><strong>CMR dématérialisés</strong></li><li><strong>Saisie de commande</strong></li></ul></div>");
            open_modal(); 
        }
        else if(nb_modal_soc === 'exploit'){
            modal_header.html('<img alt="" src="images/forModal/img_modal_exploit.png">');
            modal_content.html("<div><ul><li><strong>Traçabilité détaillée</strong></li><li><strong>Photos(CMR et réserves)</strong></li><li><strong>CMR dématérialisés</strong></li><li><strong>Saisie de commande</strong></li></ul></div>");
            open_modal();
        }        
        grid_modal.removeClass("slideShow_grid");
    }
    else if(nb_modal === 'Societe'){
        var AP = $('#AP');
        var PDS = $('#PDS');
        var FB = $('#FB');
        var LJC = $('#LJC');
        var GV = $('#GV');
        switch(nb_modal_soc){
            case 'AP':
                AP.removeClass('item_notSelect').addClass('item_select');  
                PDS.removeClass('item_select').addClass('item_notSelect');        
                FB.removeClass('item_select').addClass('item_notSelect');
                LJC.removeClass('item_select').addClass('item_notSelect');
                GV.removeClass('item_select').addClass('item_notSelect');                    
                break;
            case 'PDS':           
                AP.removeClass('item_select').addClass('item_notSelect');  
                PDS.removeClass('item_notSelect').addClass('item_select');        
                FB.removeClass('item_select').addClass('item_notSelect');
                LJC.removeClass('item_select').addClass('item_notSelect');
                GV.removeClass('item_select').addClass('item_notSelect');
                break;
            case 'FB':
                AP.removeClass('item_select').addClass('item_notSelect');  
                PDS.removeClass('item_select').addClass('item_notSelect');        
                FB.removeClass('item_notSelect').addClass('item_select');
                LJC.removeClass('item_select').addClass('item_notSelect');
                GV.removeClass('item_select').addClass('item_notSelect');
                break;
            case 'LJC':                
                AP.removeClass('item_select').addClass('item_notSelect');  
                PDS.removeClass('item_select').addClass('item_notSelect');        
                FB.removeClass('item_select').addClass('item_notSelect');
                LJC.removeClass('item_notSelect').addClass('item_select');
                GV.removeClass('item_select').addClass('item_notSelect');
                break;
            case 'GV':
                AP.removeClass('item_select').addClass('item_notSelect');  
                PDS.removeClass('item_select').addClass('item_notSelect');        
                FB.removeClass('item_select').addClass('item_notSelect');
                LJC.removeClass('item_select').addClass('item_notSelect');
                GV.removeClass('item_notSelect').addClass('item_select');
                break;
        }

        if(nb_modal_soc === 'AP'){            
            team_header.html('<div class="flex_card"><div class="flex_card_img visage"></div><div class="flex_card_text text-muted"><strong class="color_red">Antoine</strong></br>Co-Fondateur Président</div></div>');
            team_content.html("<div class='text_center text-muted'><strong> 15 ans d'expertise transport, mais surtout une vie de passion de l'informatique</strong></div>");
            open_team();
        }else if(nb_modal_soc === 'PDS'){             
            team_header.html('<div class="flex_card"><div class="flex_card_img visage"></div><div class="flex_card_text text-muted"><strong class="color_red">Philippe</strong></br>Co-Fondateur Président</div></div>');
            team_content.html("<div class='text_center text-muted'><strong> 15 ans d'expertise transport, mais surtout une vie de passion de l'informatique</strong></div>");
            open_team();
        }else if(nb_modal_soc === 'FB'){            
            team_header.html('<div class="flex_card"><div class="flex_card_img visage"></div><div class="flex_card_text text-muted"><strong class="color_red">Floran</strong></br>Co-Fondateur Président</div></div>');
            team_content.html("<div class='text_center text-muted'><strong> 15 ans d'expertise transport, mais surtout une vie de passion de l'informatique</strong></div>");
            open_team();
        }else if(nb_modal_soc === 'LJC'){            
            team_header.html('<div class="flex_card"><div class="flex_card_img visage"></div><div class="flex_card_text text-muted"><strong class="color_red">Louis</strong></br>Co-Fondateur Président</div></div>');
            team_content.html("<div class='text_center text-muted'><strong> 15 ans d'expertise transport, mais surtout une vie de passion de l'informatique</strong></div>");
            open_team();
        }else if(nb_modal_soc === 'GV'){            
            team_header.html('<div class="flex_card"><div class="flex_card_img visage"></div><div class="flex_card_text text-muted"><strong class="color_red">Gauthier</strong></br>Co-Fondateur Président</div></div>');
            team_content.html("<div class='text_center text-muted'><strong> 15 ans d'expertise transport, mais surtout une vie de passion de l'informatique</strong></div>");
            open_team();
        }
        else{
            console.log('error nb_modal_soc name');
        }
    }
    else if(nb_modal === 'SlideShow_Societe'){     
        modal_btn_slide_img.css("display","inline-block");
        modal_header.html('<div class="slideshowImg">\n\
                            <img class="img_slide" src="images/photo_locaux.png" width="350" height="200">\n\
                            <img class="img_slide" src="images/weezioo.png" width="350" height="200">\n\
                            <img class="img_slide" src="images/group_logo_soc.png" width="350" height="200">\n\
                            <img class="img_slide" src="images/img_chiffre.png" width="350" height="200">\n\
                            <img class="img_slide" src="images/forModal/img_modal_appli.png" width="350" height="200">\n\
                          </div>');        
        modal_content.html('<div class="slideshowTxt txt text_center">\n\
                                    <div class="txt_slide">Nouveaux Locaux Weezioo</div>\n\
                                    <div class="txt_slide">Weezioo</div>\n\
                                    <div class="txt_slide">Nos Clients</div>\n\
                                    <div class="txt_slide">Chiffres</div>\n\
                                    <div class="txt_slide">Notre Application</div>\n\
                            </div>'); 
        grid_modal.addClass("slideShow_grid");
        open_modal();
        showDivs(1);
    }
    else{
        console.log('error nb_modal name');
    }            
}




function img_for_modal(nb_modal,nb_modal_name){
    var img_app = $(".img_app_mobile");
    var link_app = $('#link_detail_app');
    
    var img_web = $("#img_web_mobile");
    var link_web = $('#link_detail_web');
    
    var planning = $('#card_planning');
    var sign = $('#card_signature_demat');
    var cb = $('#card_cb_rfid');
    var chat = $('#card_chat');    
    var mod_spec = $('#card_mod_spec');
    var client = $('#card_client');
    var sstr = $('#card_sstr');
    var exploit = $('#card_exploit');
        
    if(nb_modal === "TruckAccess_App" && nb_modal_name === "planning"){
        link_app.attr("onclick","text_modal('TruckAccess_App','planning')");        
        img_app.attr("src","images/forModal/img_app_planning.png");
        
        planning.removeClass('item_notSelect').addClass('item_select');  
        sign.removeClass('item_select').addClass('item_notSelect');        
        cb.removeClass('item_select').addClass('item_notSelect');
        chat.removeClass('item_select').addClass('item_notSelect');
        mod_spec.removeClass('item_select').addClass('item_notSelect');        
        
    }
    else if(nb_modal === "TruckAccess_App" && nb_modal_name === "signature_demat"){
        link_app.attr("onclick","text_modal('TruckAccess_App','signature_demat')");        
        img_app.attr("src","images/forModal/img_app_sign.png");
        
        planning.removeClass('item_select').addClass('item_notSelect');  
        sign.removeClass('item_notSelect').addClass('item_select');        
        cb.removeClass('item_select').addClass('item_notSelect');
        chat.removeClass('item_select').addClass('item_notSelect');
        mod_spec.removeClass('item_select').addClass('item_notSelect');
    }
    else if(nb_modal === "TruckAccess_App" && nb_modal_name === "cb_rfid"){
        link_app.attr("onclick","text_modal('TruckAccess_App','cb_rfid')");        
        img_app.attr("src","images/forModal/img_app_cb.png");
        
        planning.removeClass('item_select').addClass('item_notSelect');  
        sign.removeClass('item_select').addClass('item_notSelect');        
        cb.removeClass('item_notSelect').addClass('item_select');
        chat.removeClass('item_select').addClass('item_notSelect');
        mod_spec.removeClass('item_select').addClass('item_notSelect');
    }
    else if(nb_modal === "TruckAccess_App" && nb_modal_name === "chat"){
        link_app.attr("onclick","text_modal('TruckAccess_App','chat')");        
        img_app.attr("src","images/forModal/img_app_chat.png");
        
        planning.removeClass('item_select').addClass('item_notSelect');  
        sign.removeClass('item_select').addClass('item_notSelect');        
        cb.removeClass('item_select').addClass('item_notSelect');
        chat.removeClass('item_notSelect').addClass('item_select');
        mod_spec.removeClass('item_select').addClass('item_notSelect');        
    }
    else if(nb_modal === "TruckAccess_App" && nb_modal_name === "mod_spec"){
        link_app.attr("onclick","text_modal('TruckAccess_App','mod_spec')");
        img_app.attr("src","images/forModal/img_app_mod_spec.png");
        
        planning.removeClass('item_select').addClass('item_notSelect');  
        sign.removeClass('item_select').addClass('item_notSelect');        
        cb.removeClass('item_select').addClass('item_notSelect');
        chat.removeClass('item_select').addClass('item_notSelect');
        mod_spec.removeClass('item_notSelect').addClass('item_select');        
    }
    
    if(nb_modal === "TruckAccess_Web" && nb_modal_name === "client"){
        link_web.attr("onclick","text_modal('TruckAccess_Web','client')");        
        img_web.attr("src","images/forModal/img_web_client.png");
        
        client.removeClass('item_notSelect').addClass('item_select');  
        sstr.removeClass('item_select').addClass('item_notSelect');        
        exploit.removeClass('item_select').addClass('item_notSelect');
    }else if(nb_modal === "TruckAccess_Web" && nb_modal_name === "sstr"){
        link_web.attr("onclick","text_modal('TruckAccess_Web','sstr')");        
        img_web.attr("src","images/forModal/img_web_sstr.png");
        
        client.removeClass('item_select').addClass('item_notSelect');  
        sstr.removeClass('item_notSelect').addClass('item_select');        
        exploit.removeClass('item_select').addClass('item_notSelect');
    }else if(nb_modal === "TruckAccess_Web" && nb_modal_name === "exploit"){
        link_web.attr("onclick","text_modal('TruckAccess_Web','exploit')");        
        img_web.attr("src","images/forModal/img_web_exploit.png");
        
        client.removeClass('item_select').addClass('item_notSelect');  
        sstr.removeClass('item_select').addClass('item_notSelect');        
        exploit.removeClass('item_notSelect').addClass('item_select');
    }
}