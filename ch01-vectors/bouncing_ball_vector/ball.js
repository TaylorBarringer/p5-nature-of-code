class Ball {
  constructor(x, y, s) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(3); // scale the speed
    this.size = s; // size of circle
  }

  update() {
    this.pos.add(this.vel);
    this.checkBounds();
  }

  checkBounds() {
    const r = this.size * 0.5; // radius

    if (this.pos.x > width - r || this.pos.x < r) {
      this.vel.x *= -1;
    }

    if (this.pos.y > height - r || this.pos.y < r) {
      this.vel.y *= -1;
    }
  }

  show() {
    noStroke();
    fill("#1C1B1A");
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
