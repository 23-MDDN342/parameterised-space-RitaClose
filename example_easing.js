const ease = new p5.Ease();

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

  angleMode(DEGREES);

  const ease_amount_across = ease.circularInOut(curFracAmount); // OK
  // try these other versions or look up others in the docs
  // const ease_amount_across = ease.doubleCircularOgee(amount_across, 0.5);
  // const ease_amount_across = ease.bounceOut(amount_across, 10);
  // print(amount_across, ease_amount_across);

  if (clockWise) {
    circleRotation = map(ease_amount_across, 0, 1, -90, 20);
  } else {
    circleRotation = map(ease_amount_across, 0, 1, 20, -90);
  }

  // draw the background circles

push();
  fill(255, 0, 255);
  translate(width / 2, height / 2);
  rotate(circleRotation);
  ellipse(10, 10, 50);
pop();
}