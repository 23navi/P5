let newBall;

function setup() {
  createCanvas(400, 400);
   newBall= new Ball(200,0,0.7);
}

function draw() {
   background(220);
  newBall.update();
  newBall.show()
 
}