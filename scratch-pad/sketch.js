// Mover object.
let mover;

function setup() {
  createCanvas(640, 240);
  noStroke();
  background("#593D2D");
  // create Mover object.
  mover = new Mover();
}

function draw() {
  // method calls on the Mover object.
  mover.update();
  mover.checkEdges();
  mover.show();
}

class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.topSpeed = 3;
  }

  update() {
    // unit vector with random direction
    this.acceleration = p5.Vector.random2D();
    // scale acceleration vector
    this.acceleration.mult(random(2));

    // apply acceleration and velocity
    this.velocity.add(this.acceleration);
    // apply limit to magnitude of velocity
    this.velocity.limit(this.topSpeed);
    // apply velocity to position
    this.position.add(this.velocity);
  }

  show() {
    noStroke();
    // stroke(0);
    // strokeWeight(0.5);
    fill("#73553C");
    circle(this.position.x, this.position.y, 8);
    // show values of velocity vector
    console.log("(" + this.velocity.x + ", " + this.velocity.y + ")");
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}
