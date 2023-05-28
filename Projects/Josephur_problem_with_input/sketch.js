let firstTranslate=1;
let isOn=0;
let people=10;
let count=3;

let wait;


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  
  wait=createP("")
  wait.style('color', '#ff0000')
  wait.position(windowWidth-windowWidth/2.5,windowHeight/20);
  
  let button=createButton("Reset");
  button.position(windowWidth-windowWidth/6,windowHeight/16);
  button.mousePressed(check);
  
}

function getInput(){
  people=(parseInt(document.getElementById("people").value)||people);
  count=(parseInt(document.getElementById("skip").value)||count);
}


function check(){
  
  getInput();
  
 
  if(isOn===0){
    wait.html("")
    navi(people,count=2)
  }
  else{
    wait.html("Wait until over")
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const circ=(letple,count)=>{
  let arr=new Array(people);
  for(let i=0;i<people;i++){
    arr[i]=i+1;
  }
  return arr;
}


const measureBy=()=>{
  if(windowWidth>windowHeight){
    return windowHeight;
  }
  return windowWidth;
}

function navi(people,count){
  isOn=1;
  background(0);
  if(firstTranslate===1){
    translate(windowWidth/2,windowHeight/2);
  }
  
  
  firstTranslate=0;
  stroke(255)
  fill(255);
  textSize(round(measureBy()/20));
  let rad=(round(measureBy()*0.35));
  let arr=circ(people,count);
  let testFlag=0;
  let start=0;
  
  async function run() {
  
    while(arr.length!=1){
    
    let sliceIndex=(start+(count-1))%(arr.length);
    //console.log(sliceIndex);
    
    let killed=(arr.splice(sliceIndex,1));

    // console.log(...arr);
    // console.log(killed)
    start=sliceIndex;
    
    await sleep(1000);
    background(0);

    for(let i=0;i<arr.length;i++){
      let angle=(Math.round(360/arr.length));
      let dy=rad*sin(angle*i)
      let dx=rad*cos(angle*i)
      text(arr[i],dx,dy)
      text(`${killed[0]} got killed`,-1*(windowWidth/16),0)
    }
  }
  background(0)
  text(`${arr[0]} survived`,-1*(windowWidth/15),0) 
  isOn=0;
  }
  
  run();
}


  
function draw() {
  check()
  
noLoop()
}