// Vector Random Walker
//
// Date: 5-22-25
// Author: Taylor Barringer

function setup() {
  createCanvas(400, 400);
  walker = new Walker(width / 2, height / 2);
  background("#FAA0B4");
}

function draw() {
  walker.update();
  walker.show();
}
