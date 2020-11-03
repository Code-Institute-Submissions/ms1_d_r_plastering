$(window).scroll(function(){
   if ($(window).scrollTop() == 0) {
    $(".navbar").removeClass("fixed-top");
 } else {
    $(".navbar").addClass("fixed-top");
 }
});

$(window).scroll(function(){
   if ($(window).scrollTop() == 0) {
    $(".logo-container").removeClass("logo-container-resize");
 } else {
    $(".logo-container").addClass("logo-container-resize");
 }
});

$(window).scroll(function(){
   if ($(window).scrollTop() == 0) {
    $(".logo").removeClass("logo-hide");
 } else {
    $(".logo").addClass("logo-hide");
 }
});
