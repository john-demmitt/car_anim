jQuery(document).ready(function($) {
    var width = $(document).width();
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var half = width/4;
    var rDoor = $("#rDoor");
    var esv = $("#esv");
  
   
var tl = new TimelineMax();
   tl.to([fWheel, rWheel], 2, { rotation: -1800, transformOrigin: "50% 50%" }, "esv")
    .fromTo(esv, 2, { x: width }, { x: half }, "esv")
    .to(esv, 0.5, {autoAlpha:1}, "esv")
    .fromTo(rDoor, 2, { x: width }, { x: half }, "esv");
    
    tl.to(rDoor, 1, {rotationY: -60, transformOrigin: "280 50% 1"});
    
   


});