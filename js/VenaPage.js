/* ===========================================================
 * VenaPage.js v0.1
 * ===========================================================
 * Copyright 2017 Venaruzzo Gauthier.
 *
 * ========================================================== */

var VenaPage = new Object();

VenaPage.params = {
    wrapper : ".main-wrapper",
    sectionContainer: ".main_section",
    subSection: "section",
    animationTime: 1000,
    pagination: true,
    centerAlign : false,
    direction: "vertical"
};
VenaPage.Design = function(options){
    var that = this;
    that.settings = $.extend({}, VenaPage.params, options); 
    var wrapper = $(that.settings.wrapper),
        mainSections = $(that.settings.sectionContainer),
        sections = $(that.settings.subSection),
        pagination = that.settings.pagination,
        paginationList = "", 
        paginationSectionList = "",
        posTop = 0,
        posLeft = 0,
        lastAnimation = 0,
        currentAnimation = 0,
        PaginationCss = [],
        centerAlign = that.settings.centerAlign,
        direction = that.settings.direction,
        totalLength = mainSections.length;

    
    that.settings.currentMainSection = 0;
    that.settings.currentSection = 0;
    var main_index = 0;
    var section_index = 0;
    var Sections_List = [];
    if(pagination !== false){   
        var div_pagination = document.createElement("div");
        $(div_pagination).attr("id","pagination");
        $('body').append(div_pagination);  
         
        var div_paginationSectionList = document.createElement("div");
        $(div_paginationSectionList).attr("id","paginationSectionList");
        $("body").append(div_paginationSectionList);
        $(div_pagination).css("display","flex");        
    }else { $("#pagination").css("display","none");}    
    
    VenaPage.Construct = function(){
        $.each(mainSections,function(){  
            if(direction == "horizontal"){
                $(this).css({
                    position: "absolute",
                    left: posLeft + "vw",
                    top : 0
                  });
                  posLeft = posLeft + 100;

            }else if(direction == "vertical"){
                $(this).css({
                    position: "absolute",
                    left: 0,
                    top : posTop + "vh"
                  });                
                posTop = posTop + 100;    
            }
           

            $(this).attr("data-index",''+main_index+'');

            $.each($(mainSections[main_index]).children("section"), function(){
                if(centerAlign != false && centerAlign == true){
                    var dAlign = document.createElement("div");
                    $(dAlign).css({
                        "display":"table-cell",
                        "vertical-align":"middle",
                        "text-align":"center",
                        "width": "100vw",
                        "height": "100vh"
                    });    
                    var tAlign = document.createElement("div");    
                    while(this.hasChildNodes()){
                        tAlign.appendChild(this.firstChild);
                    }                
                    dAlign.append(tAlign);
                    this.append(dAlign);    
                }
                if(direction == "vertical"){
                    $(this).css({
                        position: "absolute",
                        top: 0,
                        left : posLeft + "vw"
                    });   
                    posLeft = posLeft + 100;
                }
                
                $(this).attr("data-index",''+section_index+'');                 
                section_index = section_index +1;            
            });
            Sections_List[main_index] = 0;
            if(pagination !== false){
                var urlImg = "url(images/forNav/logoNav_"+main_index+".png)";
                paginationList += ("<div class='paginationList' id='"+main_index+"' onclick='VenaPage.moveTo("+main_index+",0)' style='background-image:"+urlImg+"'></div>");        
            }
            main_index = main_index +1; 
            section_index = 0;
            if(direction == "vertical")posLeft = 0;
        });
        if(pagination === true){
            $(div_pagination).html(paginationList);                
            $("#pagination div[id='"+that.settings.currentMainSection+"']").addClass("active");
        }
    };
    that.Construct();
   VenaPage.getLocation = function(){
        var currentLocation = window.location;
        var currentHash = window.location.hash;
        if(!currentHash.match(/[#][0-9][/][#][0-9]/)){
            currentHash = "#0/#0";
        }
        else{
            currentHash = window.location.hash;
        }        
        return currentHash;
    };
    VenaPage.setLocation = function(currentMainSection,currentSection){
        var newMainSectionLocation = "#"+currentMainSection.toString();
        if(currentSection){            
            var newSubSectionLocation = "#"+currentSection.toString();
        }else{
            var newSubSectionLocation = "#"+ Sections_List[that.settings.currentMainSection].toString();
        }
        var newLocation = newMainSectionLocation+"/"+newSubSectionLocation;
        window.location = newLocation;
        return newLocation;
    };
    
    VenaPage.TravelX = function(posL){ 
        if(direction == "horizontal"){
            $(wrapper).css({
                "-webkit-transform": "translateX(" + -posL + "%)",
                "-webkit-transition": "all " + that.settings.animationTime + "ms ease",
                "-moz-transform": "translateX(" + -posL + "%)",
                "-moz-transition": "all " + that.settings.animationTime + "ms ease",
                "-ms-transform": "translateX(" + -posL + "%)",
                "-ms-transition": "all " + that.settings.animationTime + "ms ease",
                "transform": "translateX(" + -posL + "%)",
                "transition": "all " + that.settings.animationTime + "ms ease"
            }); 
        }else if(direction == "vertical"){
            $(wrapper).css({
                "-webkit-transform": "translateY(" + -posL + "%)",
                "-webkit-transition": "all " + that.settings.animationTime + "ms ease",
                "-moz-transform": "translateY(" + -posL + "%)",
                "-moz-transition": "all " + that.settings.animationTime + "ms ease",
                "-ms-transform": "translateY(" + -posL + "%)",
                "-ms-transition": "all " + that.settings.animationTime + "ms ease",
                "transform": "translateY(" + -posL + "%)",
                "transition": "all " + that.settings.animationTime + "ms ease"
            }); 
        }
                  
    };
    VenaPage.TravelY = function(mainSection_target,posT){   
        if(direction == "horizontal"){
            $(mainSection_target).css({
                "-webkit-transform": "translateY(" + -posT + "%)",
                "-webkit-transition": "all " + that.settings.animationTime + "ms ease",
                "-moz-transform": "translateY(" + -posT + "%)",
                "-moz-transition": "all " + that.settings.animationTime + "ms ease",
                "-ms-transform": "translateY(" + -posT + "%)",
                "-ms-transition": "all " + that.settings.animationTime + "ms ease",
                "transform": "translateY(" + -posT + "%)",
                "transition": "all " + that.settings.animationTime + "ms ease"
            });    
        }else if(direction == "vertical"){
            $(mainSection_target).css({
                "-webkit-transform": "translateX(" + -posT + "%)",
                "-webkit-transition": "all " + that.settings.animationTime + "ms ease",
                "-moz-transform": "translateX(" + -posT + "%)",
                "-moz-transition": "all " + that.settings.animationTime + "ms ease",
                "-ms-transform": "translateX(" + -posT + "%)",
                "-ms-transition": "all " + that.settings.animationTime + "ms ease",
                "transform": "translateX(" + -posT + "%)",
                "transition": "all " + that.settings.animationTime + "ms ease"
            });    
        }
                       
    };
    VenaPage.moveTo = function(x, y){
        if($("#modal").css("display")=== "block"){
            return;
        }
        var TotalMain = mainSections.length;
            TotalMain = TotalMain -1;
        if(x >= TotalMain){
            x = TotalMain;
        } else if(x < 0){
            x = 0;
        }
        var posL = (x *100);
        $(".main_section[data-index='"+that.settings.currentMainSection+"']").removeClass("active");
        $(".main_section[data-index='"+x+"']").addClass("active"); 
        $(".main_section[data-index='"+x+"']> section[data-index='"+that.settings.currentSection+"']").addClass("active");

        $("#pagination div[id='"+that.settings.currentMainSection+"']").removeClass("active");        
        $("#pagination div[id='"+x+"']").addClass("active");

        that.settings.currentMainSection =  x;
       
        if(y || y===0){
            mainSection_target = $(that.settings.sectionContainer + "[data-index='"+that.settings.currentMainSection+"']");
             var TotalMainChildren = $(".main_section[data-index='"+that.settings.currentMainSection+"']").children("section").length;
                TotalMainChildren = TotalMainChildren -1;
            if(y >= TotalMainChildren){
                y = TotalMainChildren;
            } else if(y < 0){
                y = 0;
            }            
            var posT = (y * 100);        
            $(".main_section[data-index='"+that.settings.currentMainSection+"']> section[data-index='"+that.settings.currentSection+"']").removeClass("active");
            $(".main_section[data-index='"+that.settings.currentMainSection+"']> section[data-index='"+y+"']").addClass("active"); 

            that.settings.currentSection =  y;            
            Sections_List[that.settings.currentMainSection] = y;
            that.TravelY(mainSection_target,posT);
        }                
        
        that.TravelX(posL);
        that.setLocation(x, y);      
    };
    
    VenaPage.locationHashChanged = function(){
        var X = parseInt(that.getLocation().substring(1,2));
        var Y = parseInt(that.getLocation().substring(4,5));
        that.moveTo(X, Y);
        
        if($(mainSections[that.settings.currentMainSection]).children("section").length > 1){                
            paginationSectionList = "";                          
//            console.log($(mainSections[that.settings.currentMainSection]).children("section"));
            $.each($(mainSections[that.settings.currentMainSection]).children("section"), function(i){  
                paginationSectionList += ("<div class='paginationSectionList' id='"+i+"' onclick='VenaPage.moveTo("+that.settings.currentMainSection+","+i+")'></div>");
                $(div_paginationSectionList).html(paginationSectionList);  
                $("#paginationSectionList .paginationSectionList[id='"+that.settings.currentSection+"']").addClass("active");         
            });   
            $("#paginationSectionList").css("display","block"); 
            if(direction == "vertical"){
                $("#paginationSectionList").css({
                    "bottom":"10px",
                    "top":"unset",
                    "right":"unset",
                    "left":"47%",
                    "display":"inline-block",
                    "width":"auto"
                });
                $(".paginationSectionList").css({
                    "display":"inline-block",
                    "margin": "0 1vh 0 1vh"
                });
            }             

        }else{           
            $("#paginationSectionList").css("display","none");
        }        
        that.settings.animationTime = that.settings.currentAnimation;
    };
    
    VenaPage.getWbVersion = function() {
        var sAgent = window.navigator.userAgent;        
        var Idx = sAgent.indexOf("MSIE");
        // If IE, return version number.
        if (Idx > 0){   return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));    }
        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./)){  return 11;  }
        // IF FireFox user agent string
        else if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){ return "moz";   }
        //It is not IE
        else{   return 0;   }
    };    
    VenaPage.windowOnLoad = function(){
        console.log("load");   
        that.settings.currentAnimation = that.settings.animationTime;
        that.settings.animationTime = 100;
        if(that.getLocation()){
            that.locationHashChanged();
        }
        else{
            console.log("Aucune URL Valide");
            that.moveTo(0);
        }     
//        alert("Height"+ $(window).height()+ "Width"+ $(window).width());
    }; 
    window.addEventListener("orientationchange", function() {
           that.windowOnLoad();
    }, false);
    window.onhashchange = that.locationHashChanged;
    if (that.getWbVersion() > 0){
        console.log("This is IE " + that.getWbVersion());  
        that.windowOnLoad();
    }
    else if(that.getWbVersion() === "moz"){
        console.log("This is MOZ");
        that.windowOnLoad();
    }
    else {
        console.log("This is not IE or MOZ."); 
        that.windowOnLoad();
    }   
    VenaPage.touchStartEventListener = function(event){       
        var touches = event.originalEvent.touches;
       
        if (touches && touches.length) {
            this.startX = touches[0].pageX;
            this.startY = touches[0].pageY; 
          
            $(this).unbind('touchmove', that.touchMoveEventListener);
            $(this).bind('touchmove', that.touchMoveEventListener);
        }        
    };    
    VenaPage.touchMoveEventListener = function(event){
        var touches = event.originalEvent.touches;
        
        if (touches && touches.length) {
            var deltaX = this.startX - touches[0].pageX;
            var deltaY = this.startY - touches[0].pageY;
            if(direction == "horizontal"){
                if (deltaX >= 50) {
                    that.swipeLeft();
                }
                else if (deltaX <= -50) {
                    that.swipeRight();
                }
                else if (deltaY >= 50) {
                    that.swipeUp();
                }
                else if (deltaY <= -50) {
                    that.swipeDown();
                }
            }
            else if(direction == "vertical"){
                if (deltaX >= 50) {
                    that.swipeUp();
                }
                else if (deltaX <= -50) {
                    that.swipeDown();
                }
                else if (deltaY >= 50) {
                    that.swipeLeft();
                }
                else if (deltaY <= -50) {
                    that.swipeRight();
                }
            }
            

            if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
                $(this).unbind('touchmove', that.touchMoveEventListener);
            }
        }    
    };
    VenaPage.initScroll = function(event, deltaY, deltaX) {
       var deltaY = deltaY;
       var deltaX = deltaX;
//        console.log(deltaY, deltaX);
        var timeNow = new Date().getTime();
        // Cancel scroll if currently animating or within quiet period
        if(timeNow - lastAnimation < 500 + that.settings.animationTime) {
            event.preventDefault();
            return;
        }
        if(direction == "horizontal"){
            if (that.getWbVersion() > 0){
                if (deltaX > 20 ) {    that.swipeRight();  }
                else if (deltaX < -20) {  that.swipeLeft();   }
                else if (deltaY > 50) {   that.swipeUp(); }
                else if (deltaY < -50) {  that.swipeDown();   }
            }
            else if(that.getWbVersion() === "moz"){
                if (deltaX >= 3) {    that.swipeRight();  }
                else if (deltaX <= -3) {  that.swipeLeft();   }
                else if (deltaY >= 3) {   that.swipeUp(); }
                else if (deltaY <= -3) {  that.swipeDown();   }
            }
            else {
                if (deltaX >= 100) {    that.swipeRight();  }
                else if (deltaX <= -100) {  that.swipeLeft();   }
                else if (deltaY > 0) {   that.swipeUp(); }
                else if (deltaY <= 0) {  that.swipeDown();   }
            }  
        }else if(direction == "vertical"){
            if (that.getWbVersion() > 0){
                if (deltaX > 20 ) {    that.swipeDown();  }
                else if (deltaX < -20) {  that.swipeUp();   }
                else if (deltaY > 50) {   that.swipeLeft(); }
                else if (deltaY < -50) {  that.swipeRight();   }
            }
            else if(that.getWbVersion() === "moz"){
                if (deltaX >= 3) {    that.swipeDown();  }
                else if (deltaX <= -3) {  that.swipeUp();   }
                else if (deltaY >= 3) {   that.swipeLeft(); }
                else if (deltaY <= -3) {  that.swipeRight();   }
            }
            else {
                if (deltaX >= 100) {    that.swipeDown();  }
                else if (deltaX <= -100) {  that.swipeUp();   }
                else if (deltaY > 0) {   that.swipeLeft(); }
                else if (deltaY <= 0) {  that.swipeRight();   }
            }  
        }
           
        lastAnimation = timeNow;
    };
    
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll wheel', function(event) {
          event.preventDefault();
          var deltaY = event.originalEvent.deltaY;
          var deltaX = event.originalEvent.deltaX;
 //         console.log(deltaY, deltaX);
          that.initScroll(event, deltaY, deltaX);
    });
    $(window).bind("touchstart", this.touchStartEventListener);
             
    
    VenaPage.swipeRight = function(){
        var currentMainSection =  that.settings.currentMainSection;
        var currentSection = that.settings.currentSection;
        var next = (currentMainSection - 1);                      
        this.moveTo(next); 
//        console.log("RIGHT",currentMainSection);
        
    };
    VenaPage.swipeLeft = function(){
        var currentMainSection =  that.settings.currentMainSection;
        var currentSection = that.settings.currentSection;
        var next = (currentMainSection + 1); 
        this.moveTo(next);
        console.log("LEFT",currentMainSection);
    };
    
    VenaPage.swipeUp = function(){
        var currentMainSection =  that.settings.currentMainSection;        
        var currentSection =  Sections_List[currentMainSection];                
        var next = (currentSection + 1); 
         this.moveTo(currentMainSection, next);   
//        console.log(Sections_List);            
//        console.log("UP",currentMainSection,currentSection,Sections_List[currentMainSection]);
    };
    VenaPage.swipeDown = function(){
        var currentMainSection =  that.settings.currentMainSection;        
        var currentSection =  Sections_List[currentMainSection];
        var next = (currentSection - 1);
            this.moveTo(currentMainSection, next); 
//            console.log(Sections_List);
//        console.log("DOWN",currentMainSection,currentSection);
        
    };
   
    $(document).keydown(function(e) {
        if (that.getWbVersion() > 0){
            var KeyDown = e.keyCode;
        }
        else {
            var KeyDown = e.key;
        }
        switch(KeyDown) {
            case "ArrowUp":
            case 38:
                if(direction == "horizontal")that.swipeDown();
                else if(direction == "vertical") that.swipeRight();
            break;
            case "ArrowDown":
            case 40:
                if(direction == "horizontal")that.swipeUp();
                else if(direction == "vertical") that.swipeLeft();
            break;
            case "ArrowRight":
            case 39: 
                if(direction == "horizontal") that.swipeLeft();
                else if(direction == "vertical") that.swipeUp();            
            break;
            case "ArrowLeft":
            case 37:
                if(direction == "horizontal") that.swipeRight();
                else if(direction == "vertical") that.swipeDown();                 
            break;
            default: return;
        }
    }); 
    
};


      
