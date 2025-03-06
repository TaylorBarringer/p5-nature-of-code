// Gaussian Distribution
//      This sketch illustrates how changing the standard deviation argument
//      for randomGaussian() can adjust the bell curve of distribution.  
// The Nature of Code by Daniel Shiffman, Ch. 0 Randomness
//
// Author: Taylor Barringer
// Date:   2025-03-01

function setup() {
    createCanvas(700, 300);
    background(255);
}

function draw() {
    let lowStandardDeviation = randomGaussian(350, 30);        // high bell curve
    let mediumStandardDeviation = randomGaussian(350, 60);
    let highStandardDeviation = randomGaussian(350, 120);      // low bell curve
    let shiftedStandardDeviation = randomGaussian(200, 90);    // shifted mean to left side

    noStroke();
    fill(255, 0, 0, 10);

    circle(lowStandardDeviation, 105, 25);
    circle(mediumStandardDeviation, 150, 25);
    circle(highStandardDeviation, 195, 25);
    circle(shiftedStandardDeviation, 250, 25);
}

