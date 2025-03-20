// Perlin Walker
//   This sketch demonstrates a walker moving in a 2D space using Perlin noise.
//   The walker's x- and y-positions are mapped from noise values.
// The Nature of Code by Daniel Shiffman
//
// Author: Taylor Barringer
// Date:   2025-03-07

function setup() {
  createCanvas(600, 600);
  background(220);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    // x- and y-position mapped from noise
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    // Move forward through time.
    this.tx += 0.01;
    this.ty += 0.01;
  }

  show() {
    strokeWeight(4);
    fill(220);
    stroke(0);
    circle(this.x, this.y, 70);
  }
}
