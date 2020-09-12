function setup() {
  createCanvas(800, 600);
}

let velocities = {
  x: 5,
  y: 5
};

let coordinates = {
  x: 0,
  y: 0
};

function reverseVelocity(direction) {
   velocities[direction] *= -1;
}

function draw() {
  background('#eee');
  
  circle(coordinates.x, coordinates.y, 20);
  
  coordinates.x += velocities.x;
  coordinates.y += velocities.y;
  
  if (coordinates.x >= width) {
    coordinates.x = width;
  
    reverseVelocity('x');
  }
  
  if (coordinates.x <= 0) {
    coordinates.x = 0;
    
    reverseVelocity('x');
  }
  
  if (coordinates.y >= height) {
    coordinates.y = height;
    reverseVelocity('y');
  }
  
  if (coordinates.y <= 0) {
    coordinates.y = 0;
    reverseVelocity('y');
  }
}