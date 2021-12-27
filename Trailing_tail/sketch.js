let abc;
let isFood=false;

function setup() {
  createCanvas(400, 400);
  
}

function mousePressed(){
  abc=new Ball(mouseX,mouseY);
}


function draw() {
  background(220);
  if(abc){
    abc.move(mouseX,mouseY);
  abc.show();
  }
  if (!isFood){
    fill(0);
    circle(random(10,390),random(10,390),10);
    isFood=true;
  }
  
  
  
}