jQuery(document).ready(function ($) {
    var width = $(document).width();
    var fRim = $("#fRim");
    var rRim = $("#rRim");
    var half = width / 4;
    var rDoor = $("#rDoor");
    var dDoor = $("#dDoor");
    var mbz = $("#mbz");
    var drvr = $("#drvr");

    var tl = new TimelineMax();
    tl.to([fRim, rRim], 2, {
            rotation: -1800,
            transformOrigin: "50% 50%"
        }, "driveon")
        .fromTo([mbz, rDoor, dDoor, drvr], 2, {
            x: width
        }, {
            x: half
        }, "driveon")
        .to([mbz, rDoor, dDoor], 0.5, {
            autoAlpha: 1
        }, "driveon")
        .to(dDoor, 1, {
            rotationY: -75,
            transformOrigin: "108 0 -1",
            ease: "Power4.easeInOut"
        }, "dDOpen")
        .to(drvr, 0.5, {
            autoAlpha: 1, scale: 2
        }, "exit")
        .to(dDoor, 0.5, {
            rotationY: 0,
            transformOrigin: "108 0 -1",
            ease: "Power4.easeInOut",
            delay: 1
        }, "rDOpen")
        .to(rDoor, 1, {
            rotationY: -75,
            transformOrigin: "227 0 -1",
            ease: "Power4.easeInOut"
        }, "rDOpen")
        .to([mbz, rDoor, dDoor], 2, {
            x: -width
        }, "driveoff");
});