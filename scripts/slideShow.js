var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = $(".img_slide");
    var y = $(".txt_slide");  
    x.css({
        "opacity":0,
        "transition":"opacity 1s linear"
    });
    if (n > x.length){
        slideIndex = 1;
    }
    if(n > y.length){
        slideIndex = 1;      
    }
    if (n < 1){
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        $(x[i]).css({
            "opacity":0,"display":"none"
        }).removeClass("active");
        $(y[i]).css({
            "opacity":0,"display":"none"
        }).removeClass("active");
    }
    
  $(x[slideIndex-1]).css({
        "display":"block","opacity":1
  }).addClass("active");
  
  $(y[slideIndex-1]).css({
        "display":"block","opacity":1
  }).addClass("active");
}

 