// Perlin Random Walker
//    Using Perlin noise to generate smooth random values
//    and applying a repelling force when close to the edge.
// The Nature of Code by Daniel Shiffman, Ch. 0 Randomness
//
// Author: Taylor Barringer
// Date:   2025-03-01

let walker;
let bounds = 9;

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
    this.tx = random(1000); // Perlin noise seed for x
    this.ty = random(1000); // Perlin noise seed for y   this.y = height / 2;
  }

  show() {
    noStroke();
    fill(0, 0, 0);
    circle(this.x, this.y, 45);
  }

  step() {
  let stepSize = 3;

  // Generate smooth Perlin noise values
  let xstep = (noise(this.tx) - 0.5) * stepSize;
  let ystep = (noise(this.ty) - 0.5) * stepSize;

  this.tx += 0.005; // Increment noise value for next frame
  this.ty += 0.005;

// If close to an edge, apply a repelling force
  let edgeThreshold = 100; // How close it gets before repelling
  let repelFactor = 0.02; // Strength of the repel force

  if (this.x < edgeThreshold) xstep += (edgeThreshold - this.x) * repelFactor;
  if (this.x > width - edgeThreshold) xstep -= (this.x - (width - edgeThreshold)) * repelFactor;
  if (this.y < edgeThreshold) ystep += (edgeThreshold - this.y) * repelFactor;
  if (this.y > height - edgeThreshold) ystep -= (this.y - (height - edgeThreshold)) * repelFactor;

  let newX = this.x + xstep;
  let newY = this.y + ystep;

  // Constrain within bounds softly
  newX = max(bounds, min(width - bounds, newX));
  newY = max(bounds, min(height - bounds, newY));

  this.x = newX;
  this.y = newY;
  }

}
