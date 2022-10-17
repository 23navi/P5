//creating balls using constructor function

let gravity=.2;

const Ball=function(x,y,f=0.7,r=25){
  this.x=x;
  this.y=y;
  this.r=r;
  this.f=f;
  this.speed=0;
  this.flag=0;
  this.need=0;
  for (let i=1;i<100;i++){
    if( Math.pow(this.f,i)<.027){
      this.need=i;
      console.log(this.need)
      break
    }
  }
  
  this.update= function (){
    this.y+=this.speed;
    this.speed+=gravity;
    
    
    if(this.y>height){
      this.y=height; //to handle the corner case in which the ball get stuck on the buttom as it's speed gets turned up and down every time it is below height
      this.flag++
      this.speed*=(-1*this.f);
    }
    if(this.flag>this.need){
      gravity=0;
      this.speed=0;
      this.y=height-3;
    }
    
  }
  
  this.show=function(){
    fill(0);
    noStroke();
    circle(this.x,this.y,2*this.r);
  }
  
}