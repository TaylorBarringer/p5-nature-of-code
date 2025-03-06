// Random Walker
//   A classic random walker program using OOP principles to
//   demonstrate randomness and object-oriented programming concepts.
// The Nature of Code by Daniel Shiffman, Ch. 0 Randomness
//
// Author: Taylor Barringer
// Date:   2025-03-01

let walker; // Global variable

function setup() {
    createCanvas(600, 600);
    background(255);

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
        fill(255, 0, 0);
        circle(this.x, this.y, 10);
    }

    step() {
        let xstep = floor(random(3)) - 1;
        let ystep = floor(random(3)) - 1;   // Yields –1, 0, or 1

        this.x += xstep;
        this.y += ystep;
    }
}
