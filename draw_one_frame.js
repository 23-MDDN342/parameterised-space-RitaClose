
function draw_one_frame(cur_frac) {
	noStroke();
	fill(0);
	rect(0, 0, 1920, 1080);

	//Growing Flower Test

	let vineSeparation = 124;
	let vineWidth = map(cur_frac, 0, 1, 0, 95);

	stroke(255);
	noFill();
	strokeWeight(2);
	angleMode(DEGREES);
	for (j = 0; j < 5; j ++) {
		for (i = 0; i < 20; i ++) {
			arc((width / 5 * j), height - (i * vineSeparation), 80, 100, 45 - vineWidth, 45 - vineWidth + 1 + (vineWidth / 7), OPEN); //310
			arc((width / 5 * j) + 63, height + 63 - (i * vineSeparation), 80, 100, 130 + vineWidth, 145 + vineWidth - (vineWidth / 7), OPEN); //225
		}
	}
	vineSeparation = 124; //62
	strokeWeight(0.25);
	for (j = 0; j < 5; j ++) {
		for (i = 0; i < 20; i ++) {
			arc((width / 5 * j), height - (i * vineSeparation), 80, 100, 310, 45, OPEN);
			arc((width / 5 * j) + 63, height + 63 - (i * vineSeparation), 80, 100, 130, 225, OPEN);
		}
	}

	strokeWeight(2);
	let pointTrack = map(cur_frac, 0, 1, 0, height / 16);
  	for (k = 0; k < 5; k ++) {
		for (i = 0; i < 16; i ++) {
			let pointY = [];
			let pointX = [];
			for (j = 0; j < 10; j ++) {
				strokeWeight(sin(pointY[8] * 2));
				stroke(70);
				pointY.push(height - (height / 16 * i) - pointTrack);
				pointX.push(30 * sin(pointY * 5) + 30 + width / 5 * k);
				fill(255);
				circle(pointX[j], pointY[j], i / 4);
				noFill();
				circle(pointX[j], pointY[j], i /2);
				// point(pointX[j], pointY[j]);
			}
		}
	}






	// Rectangle Across Screen Test
	// fill(255);

	// let offsetX = map(cur_frac, 0, 1, 0, width / 10);
	// for(i = 0; i < width / 10; i ++) {
	// 	rect((width / 10) * i - offsetX, height/5, 50, 50);
	// 	rect((width / 10) * i + offsetX, height/5 * 4, 50, 50);
	// }
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