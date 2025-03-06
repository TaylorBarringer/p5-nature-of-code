// Gaussian Random Walker
//    A simple random walker that uses a Gaussian distribution to determine the
//    step size in the x and y directions. The walker starts in the center of the
//    canvas and takes a step in a random direction each frame.
// The Nature of Code by Daniel Shiffman, Ch. 0 Randomness
//
// Author: Taylor Barringer
// Date:   2025-03-01

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
    noStroke();
    fill(0, 0, 0);
    square(this.x, this.y, 15);
  }

  step() {
    let xstep = randomGaussian(0, 2.6);
    let ystep = randomGaussian(0, 2.6);
    this.x += xstep;
    this.y += ystep;

    // If close to an edge, apply a repelling force
    let edgeThreshold = 120; // How close it gets before repelling
    let repelFactor = 0.03; // Strength of the repel force

    if (this.x < edgeThreshold) xstep += (edgeThreshold - this.x) * repelFactor;
    if (this.x > width - edgeThreshold)
      xstep -= (this.x - (width - edgeThreshold)) * repelFactor;
    if (this.y < edgeThreshold) ystep += (edgeThreshold - this.y) * repelFactor;
    if (this.y > height - edgeThreshold)
      ystep -= (this.y - (height - edgeThreshold)) * repelFactor;

    let newX = this.x + xstep;
    let newY = this.y + ystep;

    // Constrain within bounds softly
    newX = max(bounds, min(width - bounds, newX));
    newY = max(bounds, min(height - bounds, newY));

    this.x = newX;
    this.y = newY;
  }
}
