class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = r; // size of circle
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0); // clearing out force after every draw loop
  }

  applyForce(force) {
    // Newton's second law
    // a force that exists in the environment
    this.acc.add(force);
  }

  checkBounds() {
    // bottom
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    // left & right
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  show() {
    // noStroke();
    fill(160);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
