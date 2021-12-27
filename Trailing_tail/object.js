class Ball{
  constructor(x,y,r=25,trailLength=40){
    console.log("createdddd");
    this.x=x;
    this.y=y;
    this.r=r;
    this.trailLength=trailLength;
    this.arr=[]; //to store history
  }
  
  move(X,Y){
    this.x=X;
    this.y=Y;
    let vec=createVector(this.x,this.y)
    this.arr.push(vec);
    if(this.arr.length>this.trailLength){
      this.arr.splice(0,1);
    }
  }
  
  show(){
    fill(0);
    noStroke();
    circle(this.x,this.y,2*this.r);
    
    for(let i =0;i<this.arr.length;i++){
      circle(this.arr[i].x,this.arr[i].y,this.r)
    }
  }
  
  
}