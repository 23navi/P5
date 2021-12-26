//lets make a programm which will start with 1000 balls moving in random x,y in range(-5,5) our goal is to see how long it will take for all the balls to move out of canvas of size 400,400 with ball origin size being in range(50,350) on both axis and size in range(30,50) diameter. The ball is considered to be out if it's center goes out of canvas boundary


let today = new Date();
let start_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let balls=[];
let size=1000;
function setup() {
  createCanvas(400, 400);
  for (let i=0;i<size;i++){
    balls[i]=new Ball(i,random(50,350),random(50,350),random(30,50));
  }
}

function draw() {
  background(0);
  for (let i=0;i<size;i++){
    if(balls[i].x>400 || balls[i].x<0 || balls[i].y>400 || balls[i].y<0){
      balls.splice(i,1);
      size--;
      console.log(size+ " balls remaining");
    }
   
  }
  for (let i=0;i<size;i++){
       balls[i].move()
    balls[i].show()
  }
  if(size==1){
    noLoop()
    
let today = new Date();
let end_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log("Winner ball is "+balls[0].n);
    console.log(start_time)
    console.log(end_time);
  }
  
  
}

class Ball{
  constructor(n,x,y,r=50){
    this.n=n
    this.x=x;
    this.y=y;
    this.r=r;
  }
  move(){
    this.x=this.x+random(-30,30);
    this.y=this.y+random(-30,30);
  }
  show(){
    fill(255);
    stroke(0);
    strokeWeight(5);
    circle(this.x,this.y,this.r);
    
  }
}