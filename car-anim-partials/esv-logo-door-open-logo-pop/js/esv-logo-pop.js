jQuery(document).ready(function ($) {
    var width = $(document).width();
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var half = width / 6;
    var rDoor = $("#rDoor");
    var esv = $("#esv");
    var rDInner = $("rDInner");

    var tl = new TimelineMax();
    tl.to([fWheel, rWheel], 2, {
        rotation: -1800,
        transformOrigin: "50% 50%"
    }, "driveon")
        .fromTo([esv, rDoor, rDInner], 2, {
            x: width
        }, {
            x: 0
        }, "driveon")
        .to([esv, rDoor, rDInner], 0.5, {
            autoAlpha: 1
        }, "driveon")
        .to([rDoor, rDInner], 1, {
            rotationY: -75,
            transformOrigin: "230 78 -10",
            ease: Power4.easeInOut
        }, "open")
        .to([esv, rDoor, rDInner], 1, {attr: {viewBox: "255.490 85.885 0.321 0.083"}, ease:Power3.easeInOut}, "zoom");});
