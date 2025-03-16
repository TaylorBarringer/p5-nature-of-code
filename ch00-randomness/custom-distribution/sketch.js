// Custom Distribution Walker
//    This sketch demonstrates a custom distribution of random numbers.
//    The acceptReject() function uses a probability distribution to
//    determine the likelihood of a random number being accepted based off the formula y = x.
//    This means that larger numbers are more likely to be accepted.
// The Nature of Code by Daniel Shiffman
//
// Author: Taylor Barringer
// Date:   2025-03-07

let bounds = 30;

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
  }

  show() {
    noStroke();
    fill(0, 0, 0);
    square(this.x, this.y, 4);
  }

  step() {
    let step = 5; // Define the maximum step size

    // Calculate stepX with a random factor from acceptReject() multiplied by step.
    // Then, randomly decide the direction (negative or positive) using a coin toss (random() < 0.5)
    let stepX = acceptReject() * step * (random() < 0.5 ? -1 : 1);
    let stepY = acceptReject() * step * (random() < 0.5 ? -1 : 1);

    // Update the walker's position by adding stepX and stepY to the current x and y values
    this.x += stepX;
    this.y += stepY;

    // Apply edge repelling force if near the boundaries
    this.handleEdgeCollision(stepX, stepY);

    // Constrain within bounds
    this.x = max(bounds, min(width - bounds, this.x + stepX));
    this.y = max(bounds, min(height - bounds, this.y + stepY));
  }

  handleEdgeCollision(stepX, stepY) {
    // If close to an edge, apply a repelling force
    let edgeThreshold = 120; // How close it gets before repelling
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

function acceptReject() {
  // Here probability is determined by formula y = x
  // We do this “forever” until we find a qualifying random value.
  while (true) {
    let r1 = random(1); // Pick a random value.
    let probability = r1 * r1; // Assign a quadratic probability.
    let r2 = random(1); // Pick a second random value.

    // Does it qualify?  If so, we’re done!
    if (r2 > probability) {
      return r1;
    }
  }
}
