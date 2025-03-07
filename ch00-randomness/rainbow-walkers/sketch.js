// Rainbow Walker
//    A walker that moves randomly, but repels from the edges of the canvas. The
//    walker changes color based on its y position, creating a rainbow gradient. The
//    walker is also constrained to stay within the bounds of the canvas.
// The Nature of Code by Daniel Shiffman, Ch. 0 Randomness
//
// Author: Taylor Barringer
// Date:   2025-03-04

let bounds = 50;

function setup() {
  createCanvas(600, 600);
  walker = new Walker();
  walkerBlack = new Walker();
  background(220);
  colorMode(HSL, 360, 100, 100); // Using HSL for smooth gradients
}

function draw() {
  walker.step();
  walkerBlack.step();
  walker.show();
  walkerBlack.showBlack();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    let hueValue = map(sin(this.y * 0.02), -1, 1, 0, 360); // Smooth cycling
    fill(hueValue, 100, 50);
    noStroke();
    square(this.x, this.y, 25);
  }
  showBlack() {
    fill(0, 0, 0);
    noStroke();
    square(this.x, this.y, 25);
  }

  step() {
    let xstep = randomGaussian(0, 2.1);
    let ystep = randomGaussian(0, 2.2);
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
