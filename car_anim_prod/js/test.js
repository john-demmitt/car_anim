$(function () {
    var pbd = $(".pbdoor");

    var tl = new TimelineMax();
    tl.set(pbd, {transformOrigin:"left 50%"}).to(pbd, 0.5, {rotationY:90});
});