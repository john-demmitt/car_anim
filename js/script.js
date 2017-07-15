jQuery(document).ready(function($) {
    var fRim = $("#fRim");
    var rRim = $("#rRim");
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var pauseBtn = $("#pause");
    var tl = new TimelineMax();
    var rimsRot = TweenLite.to([fRim, rRim], 5, { rotation: 4800, transformOrigin: "50% 50%" });
    var mbzMove = TweenLite.fromTo($("#mbz"), 5, { x: "-400vw" }, { x: "400vw" });
    var wheelRot = TweenLite.to([fWheel, rWheel], 5, { rotation: -4800, transformOrigin: "50% 50%" });
    var esvMove = TweenLite.fromTo($("#esv"), 5, { x: "400vw" }, { x: "-400vw" });

    tl.rimsRot("mbz").
    mbzMove("mbz").
    wheelRot("esv").
    esvMove("esv");


    pauseBtn.onclick = function() {
        tl.paused(!tl.paused());
        pauseBtn.innerHTML = tl.paused() ? "play" : "pause";
    }




});