$(function () {
    var esv = $("#esv");
    var logo = $("#logo");


    function zoomTl(){
    const tl = new TimelineMax();

    tl.to(esv, 2, {attr:{ viewBox: "230 70.8 55 14.6"}}, "zoom")
    .to(logo, 2, {scaleX: 5, scaleY: 5}, "zoom");

    return tl;
    }

    
});
