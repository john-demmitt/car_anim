jQuery(document).ready(function ($) {
    var door = $("#door");

   

    var tl = new TimelineMax();
    tl.to(door, 1, {
            rotationY: -75,
            transformOrigin: "0 530 -10",
            ease: "Power4.easeInOut"
        }, "dOpen")
        .to(door, 1, {
            rotationY: 0,
            transformOrigin: "0 530 -10",
            ease: "Power4.easeInOut",
            delay: 1
        }, "dClose");
});