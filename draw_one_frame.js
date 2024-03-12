let counter = 0;
let scaleLeaf = 0;


function draw_one_frame(cur_frac) {
	noStroke();
	fill(0);
	rect(0, 0, width, height);

	stroke(255);
	noFill();

	

	//Growing Flower Test

	//Width Variables
	let vineSeparation = 124;
	let vineWidth = map(cur_frac, 0, 1, 0, 95);
	let canvasWidth = (Math.round(width / 100) * 100) / 200;
	let widthSpac = (width / canvasWidth);
	let widthSpacCenter = widthSpac / 4; // Edge Spacing not yet fixed.

	

	//Vine Tracking Marks
	stroke(255);
	noFill();
	strokeWeight(2);
	angleMode(DEGREES);
	for (tc = 0; tc < canvasWidth; tc ++) {//Tracker Columns
		for (tr = 0; tr < 20; tr ++) { // Tracker Rows
			//arc(x, y, width, height, start, stop, style);
			arc((widthSpac * tc) + widthSpacCenter, height - (tr * vineSeparation), 80, 100, 45 - vineWidth, 45 - vineWidth + 1 + (vineWidth / 7), OPEN); //310
			arc((widthSpac * tc) + widthSpacCenter + 63, height + 63 - (tr * vineSeparation), 80, 100, 130 + vineWidth, 145 + vineWidth - (vineWidth / 7), OPEN); //225
			
			// point((widthSpac * tc), height - (tr * vineSeparation));
		}
	}
	//Main Vine Arcs
	vineSeparation = 124; //62
	strokeWeight(0.25);
	for (vc = 0; vc < canvasWidth; vc ++) { // Vine Columns
		for (vr = 0; vr < 20; vr ++) { // Vine Rows
			arc((widthSpac * vc) + widthSpacCenter, height - (vr * vineSeparation), 80, 100, 310, 45, OPEN);
			arc((widthSpac * vc) + widthSpacCenter + 63, height + 63 - (vr * vineSeparation), 80, 100, 130, 225, OPEN);
		}
	}

	//Sine Wave Partcles around Vines
	strokeWeight(2);
	let pointTrack = map(cur_frac, 0, 1, 0, height / 16); // 33.75
  	for (c = 0; c < canvasWidth; c ++) { // Columns
		angleMode(DEGREES);
		for (pr = 0; pr < 18; pr ++) { // Particle Rows // 18
			let pointY = 0;
			let pointX = 0;
			for (pt = 0; pt < 75; pt ++) { // Particle Trails
				pointY = (height / 16 * pr) - pointTrack; // 16
				pointX = 8 * cos(pointY * 5 + pt) + 30 + widthSpac * c + widthSpacCenter;
				// fill(255);
				// noStroke();
				stroke(255 - (pt * 5));
				strokeWeight(0.25);
				noFill();
				circle(pointX, pointY + cos(pointY * 5 + (pt * 10)), (pr / 4) - pt / 10);
			}
			//LEAVES
			let leafRot = 270 + 50 * sin(pointY * 3);

			push();
			angleMode(DEGREES);
			pointX2 = 10 * sin(pointY * 3) + 30 + widthSpac * c + widthSpacCenter;
			
			translate(pointX2 + 2, pointY + 21);
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
			let darkGreen = color(140, 100, 30);
			let lightGreen = color(120, 100, 85);

			let leafLerp = map(leafRot, 220, 320, 0, 1);
			let leafLerp2 = map(leafRot, 220, 320, 1, 0);
			
			//Leaves and Berries
			fill(lerpColor(darkGreen, lightGreen, leafLerp)); // Dark Leaf
			arc(18, 7, 40, 30, 200, 340, CHORD);
			fill(lerpColor(darkGreen, lightGreen, leafLerp2)); // Light Leaf
			arc(18, -7, 40, 30, 20, 160, CHORD);
			// fill(255, 0, 100);
			// circle(18, 20, 4);
			// circle(24, -25, 4);
			// noFill();
			// stroke(255);
			// circle(10 - pr, -30 + pr, 4);


			// //FLOWERS
			// translate(0, -5);
			// rotate(200);
			// push();
			// 	translate(0, 5);
			// 	fill(240);
			// 	noStroke();
			// 	ellipse(0, 0, 2, 20 - pr);
			// pop();
			// for(ii = 18; ii > pr; ii --) {
			// 	if (ii < 6) {
			// 		translate(0, -1);
			// 	} else {
			// 		translate(0, 1);
			// 	}
			// 	// rotate(-ii);
			// 	// noFill();
			// 	fill(340 - ii * 2, 100, 100)
			// 	stroke(340 - ii * 2, 100, 40);
			// 	strokeWeight(0.5);
			// 	ellipse(0, 0, 20 - ii, 3);
			// }
			// fill(255);
			// circle(0, 4, 2);
			// circle(4, 2, 1);
			// circle(2, 6, 1.5);

			pop();

		}
	}
}



// var x = 300;
// var y = 300;
// var a = 100;
// var b = 100;

// // this is the fireworks example
// function draw_one_frame() {
// 	//background(255);
// 	x += 1;
// 	y += 1;
// 	a -= 2;
// 	b -= 2;
// 	strokeWeight(1);
// 	translate(width / 2, height / 2);
// 	for (var i = 0; i < 15; i++) {
// 		for (var k = 0; k < 20; k++) {
// 			stroke(255, 255, 255);
// 			rotate(PI / 12.0);
// 			fill(255, 255 - i * 10, 255 - k * 10);
// 			line(a % 100, b % 100, x % 300, y % 300);
// 			ellipse((x + i * 20) % width, (y + k * 20) % height, i + 4, i + 4);
// 			drawtriangle((a - i * 20) % width, (b - k * 20) % height, k / 8);
// 			rect(x % width, y % height, k + 10, k + 10);
// 			fill(0, i * 10, 255 - k * 10);
// 			ellipse((x - i * 20) % width, (y - k * 20) % height, i + 3, i + 3);
// 			rotate(PI / 24.0);
// 			fill(255 - (i + k) * 5, (i + k) * 7, i * 20);
// 			drawtriangle((a + i * 20) % width, (b + k * 20) % height, k / 8);
// 			rect(a % width, b % height, k + 5, k + 5);
// 			drawflower(k, x);
// 		}
// 	}

// }

// function drawtriangle(x, y, r) {
// 	triangle(x, y, x + 7 * r, y - 13.75 * r, x + 14 * r, y);
// }

// function drawflower(i, k) {
// 	if (i % 2 == 1) {
// 		fill(255, (k * 0.4) % 255, 30);
// 		stroke(k % 255, 255, 0);
// 		arc(0, 0, 150 + i + 150 * sin(k * PI / 24), 150, 0, PI / 40);
// 	} else {
// 		fill(k % 255, 0, 255);
// 		stroke(0, (k * 0.4) % 255, 255);
// 		arc(0, 0, (100 + 100 * cos(k * PI / 24)) % 255, 50, 0, PI / 20);
// 	}
// }