// Bouncing Ball
//
// Date: 05-22-25
// Author: Taylor Barringer

function setup() {
  createCanvas(400, 400);
  noStroke();

  x = width / 2;
  y = height / 2;
}

let x, y;
let xSpeed = 3;
let ySpeed = 2;
let size = 100;

function draw() {
  background("#F0EB60");

  fill("#1C1B1A");
  ellipse(x, y, size, size);

  x += xSpeed;
  y += ySpeed;

  if (x > width - size * 0.5 || x < size * 0.5) {
    xSpeed *= -1; // reverse, xSpeed becomes negative
  }
  if (y > height - size * 0.5 || y < size * 0.5) {
    ySpeed *= -1; // reverse, ySpeed becomes negative
  }
}
