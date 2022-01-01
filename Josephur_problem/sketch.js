function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
     
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const circ=(people,count)=>{
  let arr=new Array(people);
  for(let i=0;i<people;i++){
    arr[i]=i+1;
  }
  return arr;
}

  
function draw() {
  background(0);
 
  
  translate(200,200)
  stroke(255)
  fill(255);
  textSize(20);
  
  
  let people=10;
  let count=3;
  let rad=140;
  let arr=circ(people,count);
  let testFlag=0;
  let start=0;
  
  async function run() {
  
    while(arr.length!=1){
    
    let sliceIndex=(start+(count-1))%(arr.length);
    //console.log(sliceIndex);
    
    let killed=(arr.splice(sliceIndex,1));

    console.log(...arr);
    console.log(killed)
    start=sliceIndex;
    
    await sleep(1000);
      
    background(0);

    for(let i=0;i<arr.length;i++){
      let angle=(Math.round(360/arr.length));
      let dy=rad*sin(angle*i)
      let dx=rad*cos(angle*i)
      text(arr[i],dx,dy)
      text(`${killed[0]} got killed`,-30,0)
    }
  }
    
  background(0)
  text(`${arr[0]} survived`,-30,0)
    
  }
  
  
  run();
  
  noLoop()
}