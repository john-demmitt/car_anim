$(function() {


var width = $(document).width();
var fRim = $("#fRim");
var rRim = $("#rRim");
var fWheel = $("#fWheel");
var rWheel = $("#rWheel");
var esv = $("#esv");
var mbz = $("#mbz");
var svg = $("svg");

function esvAcLt() {
const tl = new TimelineMax();
<<<<<<< HEAD
tl.to([fWheel, rWheel], 4, { rotation: -4000, transformOrigin: "50% 50%" }, "eAL")
=======
tl.to([fWheel, rWheel], 4, { rotation: -3000, transformOrigin: "50% 50%" }, "eAL")
>>>>>>> master
.fromTo($("#esv"), 4, { x: width, rotationY:0 }, { x: -width }, "eAL")
.to(svg, 0.1, {autoAlpha:1}, "eAL");

return tl;

}

function mbzAcLt() {
    const tl = new TimelineMax();
    tl.fromTo($("#mbz"), 4, {  x: width, rotationY:0 }, {x: -width}, "mAL")
    .to([fRim, rRim], 4, { rotation: -4000, transformOrigin: "50% 50%"}, "mAL")
    .to(svg, 0.1, {autoAlpha:1}, "mAL");
    
    return tl;
    
    }

    function esvAcRt() {
        const tl = new TimelineMax();
<<<<<<< HEAD
        tl.to([fWheel, rWheel], 4, { rotation: 4000, transformOrigin: "50% 50%" }, "eAR")
=======
        tl.to([fWheel, rWheel], 4, { rotation: 3000, transformOrigin: "50% 50%" }, "eAR")
>>>>>>> master
        .fromTo($("#esv"), 4, { x: -width, rotationY:180 }, { x: width }, "eAR")
        .to(svg, 0.1, {autoAlpha:1}, "eAR");
        
        return tl;
        
        }
        
        function mbzAcRt() {
            const tl = new TimelineMax();
            tl.fromTo($("#mbz"), 4, {  x: -width, rotationY:180 }, {x: width}, "mAR")
            .to([fRim, rRim], 4, { rotation: 4000, transformOrigin: "50% 50%"}, "mAR")
            .to(svg, 0.1, {autoAlpha:1}, "mAR");
            
            return tl;
            
            }

            const tonfro = new TimelineMax();
            tonfro.add(mbzAcLt()).add(mbzAcRt());

<<<<<<< HEAD
=======
            
>>>>>>> master
});