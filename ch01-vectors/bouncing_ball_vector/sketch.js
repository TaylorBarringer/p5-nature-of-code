// Bouncing Ball with Vectors
//
// Date: 05-22-25
// Author: Taylor Barringer

function setup() {
  createCanvas(400, 400);
  noStroke();
  ball = new Ball(width / 2, height / 2, 100);
}

function draw() {
  background("#F0EB60");
  ball.update();
  ball.show();
}
