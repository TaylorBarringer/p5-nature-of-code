// Random Walker Who Loves To Go Right
//      Using nonuniform distrobution to influence the 
//      direction the random walker favors.
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
        this.x = 20;
        this.y = height / 2;
    }

    show() {
        noStroke();
        fill(255, 0, 0);
        circle(this.x, this.y, 20);
    }

    step() {
        let num = random(1);

        if (num < 0.4)
            this.x++;
        else if (num < 0.6)
            this.x--;
        else if (num < 0.8)
            this.y++;
        else
            this.y--;
    }
}
