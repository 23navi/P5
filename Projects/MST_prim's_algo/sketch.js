let allPoints=[]

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  const vertex=createVector(mouseX,mouseY);
  allPoints.push(vertex);

}

function draw() {
  background(50);
  
  //initial condition
  let un=[...allPoints]
  let r=[]
  if(un.length>0){
    r=[un[0]]
  }
  un.splice(0,1)
  
  //checking for the smallest dist
 
   
  while(un.length>0){
    let dis=10000000;
    let ui;
    let ri;
    
    for(let i=0;i<r.length;i++){
      for(let j=0;j<un.length;j++){
        let newDist= dist(r[i].x,r[i].y,un[j].x,un[j].y);
        if(newDist<dis){
          dis=newDist;
          ui=j;
          ri=i;
        }
      }
    }
    fill(255);
    strokeWeight(4);
    line(r[ri].x,r[ri].y,un[ui].x,un[ui].y)
    r.push(un[ui]);
    un.splice(ui,1)
  }

  
  
  
  
  //Draw
  
  for(let i=0;i<allPoints.length;i++){
    fill(255)
    stroke(4);
    circle(allPoints[i].x,allPoints[i].y,10);

  }
}