var scrolledTop = 10;

$(document).scroll(function() { 
   if($(window).scrollTop() === 0) {
        $("header").css("height", "5em");
        $(".logo-text").css("letter-spacing", scrolledTop + "px");
        $(".logo-img").css("transform", "scaleX(1)");
        if (scrolledTop < 70) {
            scrolledTop += 3;
        } else {
            scrolledTop = 10
        }
   }
   else {
        $("header").css("height", "3em");
        $(".logo-text").css("letter-spacing", "3px");
        $(".logo-img").css("transform", "scaleX(-1)")
   }
});
