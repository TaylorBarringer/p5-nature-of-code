// Perlin Step Walker
//    A walker that moves in a random direction using Perlin noise.
//    The Perlin values are mapped to step sizes, which are then added to the walker's position.
//    The walker is confined to the canvas and repelled from the edges.
// The Nature of Code by Daniel Shiffman
//
// Author: Taylor Barringer
// Date:   2025-03-07

const bounds = 50;

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
    // Values from Perlin noise space
    this.tx = 0;
    this.ty = 10000;
  }

  show() {
    strokeWeight(2.5);
    fill(220);
    stroke(0);
    circle(this.x, this.y, 70);
  }

  step() {
    //  Mapping noise values to step sizes
    let step = 4;
    let stepX = map(noise(this.tx), 0, 1, -step, step);
    let stepY = map(noise(this.ty), 0, 1, -step, step);
    this.x += stepX;
    this.y += stepY;

    // Apply edge repelling force if near the boundaries
    this.handleEdgeCollision(stepX, stepY);

    // Constrain within bounds
    this.x = max(bounds, min(width - bounds, this.x + stepX));
    this.y = max(bounds, min(height - bounds, this.y + stepY));

    // Move forward through time.
    this.tx += 0.009;
    this.ty += 0.009;
  }

  handleEdgeCollision(stepX, stepY) {
    // If close to an edge, apply a repelling force
    let edgeThreshold = 250; // How close it gets before repelling
    let repelFactor = 0.04; // Strength of the repel force

    // Apply repelling force if near the edges
    if (this.x < edgeThreshold) stepX += (edgeThreshold - this.x) * repelFactor;
    if (this.x > width - edgeThreshold)
      stepX -= (this.x - (width - edgeThreshold)) * repelFactor;
    if (this.y < edgeThreshold) stepY += (edgeThreshold - this.y) * repelFactor;
    if (this.y > height - edgeThreshold)
      stepY -= (this.y - (height - edgeThreshold)) * repelFactor;

    // Update the walker's position by adding stepX and stepY to the current x and y values
    this.x += stepX;
    this.y += stepY;
  }
}
