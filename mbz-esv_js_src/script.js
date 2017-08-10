$(function () {
    var width = $(document).width();
    var fRim = $("#fRim");
    var rRim = $("#rRim");
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var esv = $("#esv");
    var mbz = $("#mbz");
    var svg = $("svg");


    function mbzAcrossRt(){
const tl = new TimelineMax();

    tl.fromTo($("#mbz"), 4, {  x: -width }, {x: width}, "mar")
    .to([fRim, rRim], 4, { rotation: 4000, transformOrigin: "50% 50%"}, "mar")
    .to(svg, 0.5, {autoAlpha:1}, "mar");

    return tl;
    }

 function esvAcrossLt(){
const tl = new TimelineMax();

    tl.to([fWheel, rWheel], 4, { rotation: -4000, transformOrigin: "50% 50%" }, "eal")
    .fromTo($("#esv"), 4, { x: width }, { x: -width }, "eal")
    .to(esv, 0.5, {autoAlpha:1}, "eal");

    return tl;
    }


});

