$(window).scroll (function() {
    var winScroll = $(this).scrollTop();

    $(".jumper1").css({
        "transform" : "translate(-" + winScroll/5 + "px, " + winScroll / 0.7 + "px) rotate(-" + winScroll / 6 + "deg)"
        //"transform" : "translate(-" + winScroll / 1  + "px, 0px)"
    });


    console.log(winScroll);
});




// $(window).scroll(function() {

//     var winScroll = $(this).scrollTop();

//     $(".logo").css({
//         "transform" : "translate(0, " + winScroll / 1.9 + "%)"
//     });

//     $(".backBird").css({
//         "transform" : "translate(0," + winScroll / 3.5 + "%)"
//     });

//     $(".foreBird").css({
//         "transform" : "translate(0, -" + winScroll / 90 + "%)"
//     });

//     // if((winScroll + ($(window).height()*2/3)) > $(".flexClothesPics").offset().top) {
//     if((winScroll) > $(".flexClothesPics").offset().top - ($(window).height()*2/3)) {
//         $(".flexClothesPics figure").each(function(i) {

//             setTimeout(function() {
//                 $(".flexClothesPics .anImage").eq(i).addClass("isShowing");
//             }, 200 * (i+1));
            
//         });
//     }
//     console.log(winScroll);
    


// });