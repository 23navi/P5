const r=20;
let overLapCounter=0;
const circleArray=[];
const Wheight=600;
const Wwidth=600;

function setup() {
  createCanvas(Wheight, Wwidth);
  
  let newc=new Circle(random(r,Wwidth-r),random(r,Wheight-r),r)
  circleArray.push(newc)
  
}

function draw() {
  background(255);
  
  let newCircle=new Circle(random(r,Wwidth-r),random(r,Wheight-r),r)
   let flag=0;
    for(let i=0;i<circleArray.length;i++){
      if(dist(newCircle.x,newCircle.y,circleArray[i].x,circleArray[i].y)<=2*r){
        flag=1;
          break
      }
    }
      
      if(flag==1){
        overLapCounter++;
      }else{
        circleArray.push(newCircle);
        overLapCounrer=0;
      }
   
  
   for (let i=0;i<circleArray.length;i++){
    circleArray[i].show();

  }
 
  if(overLapCounter>1000){
    console.log("stoped")
    console.log("Area covered: "+(PI*r*r*(circleArray.length)/(Wheight*Wwidth)))
    noLoop();
  }
  
    
  
  
}

class Circle{
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
  }
  overlap(otherCircle){
   
      return(dist(this.x,this.y,otherCircle.x,otherCircle.y)                       <=2*r)
  }
  
  show(){
    fill(20);
    noStroke();
    circle(this.x,this.y,2*this.r);
  }
}