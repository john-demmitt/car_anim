$(function () {
    var esv = $("#esv");
    var logo = $("#logo");
var svg=$("svg");

    function zoomTl(){
    const tl = new TimelineMax();

    tl.set(svg,{visibility:"visible"}).to(esv, 0.75, {attr:{ viewBox: "229 60.3 13 3"}}, "zoom");

    return tl;
    }

   zoomTl();
 
});
