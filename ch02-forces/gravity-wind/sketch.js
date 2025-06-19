// Gravity & Wind
//    A physics simulation using p5.js that demonstrates forces acting on an object.
//    The ball experiences gravity continuously and wind when the mouse is pressed.
//    Forces are accumulated and applied, the ball's position is updated, boundary collisions are checked.
//
// Date: 06-14-25
// Author: Taylor Barringer

function setup() {
  createCanvas(400, 400);
  ball = new Ball(width / 2, height / 2, 25);
}

function draw() {
  background(255);

  // apply wind when mouse is pressed
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0); // points to the right
    ball.applyForce(wind);
  }

  let gravity = createVector(0, 0.2); // points down
  ball.applyForce(gravity);

  ball.update();
  ball.checkBounds();
  ball.show();
}
