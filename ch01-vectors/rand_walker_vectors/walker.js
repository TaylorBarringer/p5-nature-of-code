class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  update() {
    let vel = createVector(random(-2, 2), random(-2, 2));
    this.pos.add(vel);
  }

  show() {
    fill("#1C1B1A");
    ellipse(this.pos.x, this.pos.y, 5);
  }
}
