/*
 * @name Linear Gradient
 * @arialabel The background is white on the left and right sides and gradients to a black at the center. There are two long rectangles on the background gradient. The top rectangle has orange on the top of the rectangle and gradients to blue on the bottom. The bottom rectangle starts with blue on the left side and gradients to orange on the right
 * @description The lerpColor() function is useful for interpolating between
 * two colors.
 */
// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(400, 400);

  // Define colors
  b1 = color(1000);
  b2 = color(200);
  c1 = color(200,0, 50);
  c2 = color(300, 200, 100);

  noLoop();
}

function draw() {
  // Background
  setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
  setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
  // Foreground
  setGradient(0, 90, 800, 80, c1, c2, Y_AXIS);
  setGradient(0, 190, 800, 80, c2, c1, X_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
