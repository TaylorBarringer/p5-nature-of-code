// Random Walker That Moves Towards Mouse Sometimes
//      A random walker with a 50% change of moving 
//      in the direction of the mouse.
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
        const r = random();

        // 50% chance to move toward the mouse
        if (r < 0.5) {
            // If r < 0.25, move in the x-direction (25% chance)
            if (r < 0.25) {
                if (this.x < mouseX) {
                    this.x++;
                } else {
                    this.x--;
                }
            }
            // Otherwise (0.25 ≤ r < 0.5), move in the y-direction (25% chance)
            else {
                if (this.y < mouseY) {
                    this.y++;
                } else {
                    this.y--;
                }
            }
        }
        // 50% chance to move in a completely random direction
        else {
            const choice = floor(random(4));
            if (choice == 0) {
                this.x++;
            } else if (choice == 1) {
                this.x--;
            } else if (choice == 2) {
                this.y++;
            } else {
                this.y--;
            }
        }
    }
}
