$(window).scroll (function() {
    var winScroll = $(this).scrollTop();

    $(".jumper1").css({
        "transform" : "translate(-" + winScroll/5 + "px, " + winScroll / 0.7 + "px) rotate(-" + winScroll / 6 + "deg)"
        //"transform" : "translate(-" + winScroll / 1  + "px, 0px)"
    });

});

