function setup() {
  createCanvas(400, 300);
}

function draw() {
  background('#eee');

  if (mouseX < width / 2) {
    fill('#0000ff');
  } else {
    fill('#ff0000');
  }

  circle(mouseX, mouseY, 20);
}