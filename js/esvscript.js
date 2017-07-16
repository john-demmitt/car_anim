jQuery(document).ready(function($) {
    var width = $(document).width();
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var half = width/2;
    var rDoor = $("#rDoor");
    
   
var tl = new TimelineMax();
    tl.to([fWheel, rWheel], 4, { rotation: -6000, transformOrigin: "50% 50%" }, "esv")
    .fromTo($("#esv"), 4, { x: width }, { x: half }, "esv")
    .to(rDoor, 2, {rotationY: 60, transformOrigin: "left"});
    
   


});