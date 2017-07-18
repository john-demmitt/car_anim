jQuery(document).ready(function($) {
    var width = $(document).width();
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var half = width/4;
    var rDoor = $("#rDoor");
    var esv = $("#esv");

var tl = new TimelineMax();
   tl.to([fWheel, rWheel], 2, { rotation: -1800, transformOrigin: "50% 50%" }, "esv")
    .fromTo([esv, rDoor], 2, { x: width }, { x: half }, "esv")
    .to([esv, rDoor], 0.5, {autoAlpha:1}, "esv")
   .to(rDoor, 1, {rotationY: -60, transformOrigin: "260 50% -10"})
   .to(rDoor, 1, {rotationY: 0, transformOrigin: "260 50% -10", delay:1})
   .to([esv,rDoor], 2, { x: -width});

});