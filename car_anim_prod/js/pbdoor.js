$(function () {
    var pbdoor = $(".pbdoor");
    var fRim = $("#fRim");
    var rRim = $("#rRim");
    
console.log(pbdoor);


    tl = new TimelineMax();
  tl.to([fRim, rRim], 4, { rotation: -4000, transformOrigin: "50% 50%"});


// Close phone booth door by default
for (var i = 0; i < pbdoor.length; i++) {
	tl.set(pbdoor[i], {
		transformOrigin: "left 50%",
		rotationY: 90
	});
}

// Open phone booth door
// Use label so they animate at same time
for (var i = 0; i < pbdoor.length; i++) {
	tl.to(pbdoor[i], 0.5, {
		rotationY: -10,
	}, "open-door+=0.25");
}

for (var i = 0; i < pbdoor.length; i++) {
	tl.to(pbdoor[i], 0.3, {
		rotationY: 0,
		ease: Bounce.easeInOut
	}, "open-door-swing-slightly");
}

tl.to([fRim, rRim], 4, { rotation: 4000, transformOrigin: "50% 50%"});


// Close phone booth door
for (var i = 0; i < pbdoor.length; i++) {
	tl.to(pbdoor[i], 0.3, {
		rotationY: 90
	}, "shut-door");
}


});
