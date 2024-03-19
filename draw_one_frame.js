const ease = new p5.Ease();

let counter = 0;
let scaleLeaf = 0;

let bees = false;

//Splayed Flower Vines
let flowerSplay = 'Random'; // 'Random', 'All', 'Alternate' 'None'
let ranC = 1;

let flowerType = 'Lotus'; // MorningGlory, Lotus, Pinwheel, None
let flowerX = -5;
let flowerY = 5;

let canvasMultiplier;


function draw_one_frame(cur_frac) {
	let clockWise = true;
	let curFracAmount = 0;
	if (cur_frac < 0.5) {
		clockWise = true;
		curFracAmount = cur_frac * 2;
	} else {
		clockWise = false;
		curFracAmount = (cur_frac - 0.5) * 2;
	}

	if(cur_frac == 0) {
		ranC = floor(random(1, 5));
	}
	
	const ease_amount_across = ease.circularInOut(curFracAmount); // bounceOut(curFracAmount, 2) // doubleCircularOgee(curFracAmount, 1)
	
	let canvasWidth = 5;
	
	if (width < 1000) {
		canvasMultiplier = 1;
	} else if (width < 1100) {
		canvasMultiplier = 2;
	} else {
		canvasMultiplier = 2.2;
	}
	
	noStroke();
	fill(0);
	rect(0, 0, width, height);
	angleMode(DEGREES);

	push();
		scale(canvasMultiplier);
		fill(20);
		translate(500, height * (2 / canvasMultiplier));
		rotate(45);
		for(i = 0; i < 30; i ++) {
			rotate(-90);
			fill(20);
			rect(0, i * -50, width * 2, 15);
			fill(10);
			rect(0, i * -50 - 5, width * 2, 15);
			rotate(90)
			push();
				translate(-1500, 0);
				fill(25);
				rect(0, i * -50, width * 2, 15);
				fill(15);
				rect(0, i * -50 - 5, width * 2, 15);
			pop();
		}
	pop();
	
	stroke(255);
	noFill();

	colorMode(HSB);
	let darkGreen = color(140, 100, 30);
	let lightGreen = color(120, 100, 85);

	let darkPink = color(345, 100, 50);
	let lightPink = color(310, 100, 85);

	

	//Growing Flower Test

	//Width Variables
	let vineSeparation = 124;
	let vineWidth = map(cur_frac, 0, 1, 0, 95);
	let widthSpac = (width / canvasWidth);
	let widthSpacCenter = widthSpac / 4; // Edge Spacing not yet fixed.
	let spacing;

	//Main Vine Arcs
	push();
		scale(canvasMultiplier);
		noFill();
		strokeWeight(3);
		stroke(darkGreen);
		vineSeparation = 124; //62
		strokeWeight((random(0.25, 3)) / canvasMultiplier);
		for (vc = 0; vc < canvasWidth; vc ++) { // Vine Columns
			spacing = widthSpacing(widthSpac, widthSpacCenter, vc, canvasMultiplier);
			for (vr = 0; vr < 20; vr ++) { // Vine Rows
				arc(spacing, height - (vr * vineSeparation), 80, 100, 310, 45, OPEN);
				arc(spacing + 63, height + 63 - (vr * vineSeparation), 80, 100, 130, 225, OPEN);
			}
		}
		// Vine Tracking Marks
		stroke(40, 100, 100);
		for (tc = 0; tc < canvasWidth; tc ++) {//Tracker Columns
			spacing = widthSpacing(widthSpac, widthSpacCenter, tc, canvasMultiplier);
			for (tr = 0; tr < 20; tr ++) { // Tracker Rows
				arc(spacing, height - (tr * vineSeparation), 80, 100, 45 - vineWidth, 45 - vineWidth + 1 + (vineWidth / 7), OPEN); //310
				arc(spacing + 63, height + 63 - (tr * vineSeparation), 80, 100, 130 + vineWidth, 145 + vineWidth - (vineWidth / 7), OPEN); //225
			}
		}
	pop();

	//Sine Wave Partcles around Vines
	strokeWeight(2);
	let pointTrack = map(cur_frac, 0, 1, 0, height / (16 * canvasMultiplier)); // 33.75
  	for (c = 0; c < canvasWidth; c ++) { // Columns
		angleMode(DEGREES);
		push();
		scale(canvasMultiplier);
		spacing = widthSpacing(widthSpac, widthSpacCenter, c, canvasMultiplier);
		for (pr = 0; pr < (22 * canvasMultiplier); pr ++) { // Particle Rows // 18
			let pointY = 0;
			let pointX = 0;
			for (pt = 0; pt < 6; pt ++) { // Particle Trails
				pointY = (height / (16 * canvasMultiplier) * pr) - pointTrack - 20; // 16
				pointX = 50 * sin(pointY * 5 + pt) + 30 + spacing;
				noStroke();
				if(pt %2 == 1 && bees) {
					fill(60, 100, 100);
					circle(pointX, pointY + cos(pointY * 5 + (pt * 10)), (pr / 4) - pt / 10);
				} else if (bees) {
					fill(10);
					circle(pointX, pointY + cos(pointY * 5 + (pt * 10)), (pr / 4) - pt / 10);
				}
			}
			if (bees) {
				noFill();
				stroke(255);
				strokeWeight(0.25);
				ellipse(50 * sin(pointY * 5) + 30 + spacing, pointY -1, 3, random(0, 5));
				ellipse(50 * sin(pointY * 5) + 31 + spacing, pointY - 2, 3, random(-1, 4));
			}
			
			//LEAVES
			let leafRot = 270 + 50 * sin(pointY * 3);

			push();
			angleMode(DEGREES);
			pointX2 = 10 * sin(pointY * 3) + 30 + spacing;
			translate(pointX2 + 2, pointY + (26 * canvasMultiplier)); // 21, 28, 
			rotate(leafRot);
			// if (pr % 2 == 1) {
			// 	translate(pointX2 + 2, pointY + 21);
			// 	rotate(270 + 50 * sin(pointY * 3));
			// } else {
			// 	translate(pointX2 + 2, pointY + 21);
			// 	rotate(270 + 50 * sin(pointY * 3));
			// }

			colorMode(HSB);
			noStroke();

			let leafLerp = map(leafRot, 220, 320, 0, 1);
			let leafLerp2 = map(leafRot, 220, 320, 1, 0);

			let scaleMap = map(pr, 5, 18, 1.1, 0.5);
			
			//Leaves and Berries
			// scale((18-pr)/16); // map
			scale(scaleMap);
			fill(lerpColor(darkGreen, lightGreen, leafLerp)); // Dark Leaf
			arc(18, 7, 40, 30, 200, 340, CHORD);
			fill(lerpColor(darkGreen, lightGreen, leafLerp2)); // Light Leaf
			arc(18, -7, 40, 30, 20, 160, CHORD);
			push();
			rotate(180);
			translate(-35, 0);
			for (i = 0; i < 5; i ++) {
				noFill();
				strokeWeight(0.5);
				scale(1 - (i / 5));
				stroke(darkGreen);
				arc(18, 7, 40, 30, 200, 340, CHORD);
				arc(18, -7, 40, 30, 20, 160, CHORD);
			}
			pop();


			//FLOWERS
			let splayAmount;
			let runFullFlower = false;

			if ((flowerSplay == 'Random' && c == ranC) || (flowerSplay == 'Alternate' && c % 2 != 1) || flowerSplay == 'All') {
				runFullFlower = true;
			}

			if(runFullFlower && flowerType == 'Lotus') {
				if (clockWise) {
					circleRotation = map(ease_amount_across, 0, 1, 0, 180);
					splayAmount = map(ease_amount_across, 0, 1, 0, 55);
				} else {
					circleRotation = map(ease_amount_across, 0, 1, 180, 360);
					splayAmount = map(ease_amount_across, 0, 1, 55, 0);
				}
			} else {
				if (clockWise) {
					circleRotation = map(ease_amount_across, 0, 1, 0, 20);
					splayAmount = map(ease_amount_across, 0, 1, 0, 15);
				} else {
					circleRotation = map(ease_amount_across, 0, 1, 20, 0);
					splayAmount = map(ease_amount_across, 0, 1, 15, 0);
				}
			}
			rotate(circleRotation);
			
			if (c %2 == 1) {
				circleRotation = circleRotation * -1;
			}

			draw_Flowers(flowerType, flowerX, flowerY, lightPink, darkPink, cur_frac, 0, splayAmount);
			if (flowerType == 'MorningGlory') {
				draw_Flowers("MorningGlory", 0, -5, 0, 0, cur_frac, 230);
			}

			pop();

			// let circleMap = map(cur_frac, 0, 1, height / 5, 0);
			// for (j = 0; j < 8; j ++) {
			// 	for(i = 0; i < 7; i ++) {
			// 		fill(20);
			// 		noStroke();
			// 		if (j % 2 == 1){
			// 			circle(spacing - 66, circleMap + (i * height / 5) - 50, 2);
			// 		} else {
			// 			// circle(spacing, circleMap + (i * height / 5), 2);
			// 		}
			// 	}
			// }
		}
		pop();
	}
}

function widthSpacing(widthSpac, widthSpacCenter, loopVar, canvasSize) {
	return widthSpac * (loopVar / canvasSize) + widthSpacCenter / canvasSize;
}

function draw_Flowers(flowerType, X, Y, color1, color2, cur_frac, extraRotation, splay) {	
	
	if (flowerType == 'MorningGlory') { // "MorningGlory", 340, -5, 5, 1
		push();
			translate(X, Y);
			rotate(340 + extraRotation);
			push();
				translate(0, 5);
				fill(240);
				noStroke();
				ellipse(0, 0, 2, 20 - pr);
			pop();
			strokeWeight(2);
			stroke(100, 100, 60);
			line(0, 0, X, Y);
			for(ii = 18; ii > pr; ii --) {
				if (ii < 6) {
					translate(0, -1);
				} else {
					translate(0, 1);
				}
				// rotate(-ii);
				noFill();
				// fill(340 - ii * 2, 100, 100);
				stroke(360 - ii * 5, 100, 80 - ii * 4);
				strokeWeight(1);
				ellipse(0, 0, 20 - ii, 5);
			}
			fill(255);
			noStroke();
			circle(0, 4, 2);
			circle(4, 2, 1);
			circle(2, 6, 1.5);
		pop();
	}	else if (flowerType == 'Lotus') {// Lotus, 180, 0, -5, 0.4, lightPink, darkPink
		push();
			translate(0, -3); // 0, 5
			rotate(180); //40
			scale(0.4);
			strokeWeight(2);
			stroke(100, 100, 60); // Green Stalk
			line(0, 0, 0, -5);
			for(i = 0; i < 6; i ++) {
				if (310 - pr * 2 + (splay * 5) > 360) {
					fill(0 - pr * 2 + (splay * 5 - 360), 100, 60 - pr * 6 + (splay / 5));
				} else {
					fill(310 - pr * 2 + splay, 100, 60 - pr * 6 + (splay / 5));
				}
				stroke(310 - pr * 2  + splay, 100, 70 - pr);
			
				strokeWeight(1);
				rotate(5 + splay);
				arc(18, 7, 40, 30, 200, 340, CHORD);
				arc(18, -7, 40, 30, 20, 160, CHORD);
				
				fill(255); //330, 100, 90
				noStroke();
				circle(30, 0, 3);
				fill(310 - splay, 100, 30 + splay);
				circle(40 + splay / 10, 0, 2);
			}
			rotate(20);
			scale(0.8);
			for(i = 0; i < 6; i ++) {
				if (320 - pr * 2 + (splay) > 360) {
					fill(splay - 360, 100, 100 - pr)
					stroke(320 - pr * 2 + splay, 100, 60 - pr * 6);//color2
				} else {
					fill(320 - pr * 2 + splay, 100, 100 - pr);//color1
					stroke(320 - pr * 2 + splay, 100, 60 - pr * 6);//color2
				}
				rotate(-5 - splay);
				arc(18, 7, 40, 30, 200, 340, CHORD);
				arc(18, -7, 40, 30, 20, 160, CHORD);
			}
			rotate(-20);
			for(i = 0; i < 6; i ++) {
				rotate(splay + 5);
				stroke(255);
				fill(255);
				line(0, 0, splay * 0.7, 0);
				circle(splay * 0.7, 0, 2);
			}
			fill(255);
		pop();
	} else if (flowerType == 'Pinwheel') { // 'Pinwheel', 120, 0, -15, 0.3, lightPink, darkPink, cur_frac
		translate(0, -15);
		rotate(cur_frac * 120);
		push();
		scale(0.3);
		strokeWeight(2);
		for(i = 0; i < 6; i ++) {
			stroke(340, 100, 30);
			rotate(60);
			fill(color1); // Dark Leaf
			arc(18, 7, 40, 30, 200, 340, CHORD);
			fill(color2); // Light Leaf
			arc(18, -7, 40, 30, 20, 160, CHORD);
			circle(10, 0, 10);
		}
		fill(255);
		circle(0, 0, 8);
		pop();
	} else {
		fill(255, 0, 100);
		circle(18, 20, 4);
		circle(24, -25, 4);
	}
	
}