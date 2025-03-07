// Gaussian Random Walker
//    A simple random walker that uses a Gaussian distribution to determine the
//    step size in the x and y directions. The walker starts in the center of the
//    canvas and takes a step in a random direction each frame.
// The Nature of Code by Daniel Shiffman, Ch. 0 Randomness
//
// Author: Taylor Barringer
// Date:   2025-03-04

let bounds = 50;

function setup() {
  createCanvas(600, 600);
  walker = new Walker();
  background(220);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    fill(0, 0, 0);
    noStroke();
    square(this.x, this.y, 15);
  }

  step() {
    let xStep = randomGaussian(0, 3);
    let yStep = randomGaussian(0, 3);
    this.x += xStep;
    this.y += yStep;

    // If close to an edge, apply a repelling force
    let edgeThreshold = 120; // How close it gets before repelling
    let repelFactor = 0.03; // Strength of the repel force

    if (this.x < edgeThreshold) xStep += (edgeThreshold - this.x) * repelFactor;
    if (this.x > width - edgeThreshold)
      xStep -= (this.x - (width - edgeThreshold)) * repelFactor;
    if (this.y < edgeThreshold) yStep += (edgeThreshold - this.y) * repelFactor;
    if (this.y > height - edgeThreshold)
      yStep -= (this.y - (height - edgeThreshold)) * repelFactor;

    // Constrain within bounds
    this.x = max(50, min(width - 50, this.x + xStep));
    this.y = max(50, min(height - 50, this.y + yStep));
  }
}
