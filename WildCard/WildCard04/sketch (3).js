// https://aphid.github.io/ct120/video/

//https://editor.p5js.org/nginelli/sketches/aWPi-bPhy
var grd;
var setGrad; 

var r = 255;
var g = 204;
var b = 0;


let count = 8;

function setup() {
  createCanvas(400, 400);
  let thesize = width / count;
  print(thesize);
  
  for (let i = 0; i< count; i++) {
    for (let j = 0; j < count; j++) {
      if ((i + j) % 4 === 0){
        let squareBg = map(mouseY, 0, height, 0, 400);
        fill(225, squareBg, 100);
      } else if ((i + j ) % 4 === 1) {
        let squareBg = map(mouseY, 0, height, 0, 400);
        fill(225, squareBg, 200);
      } else if ((i + j) % 4 === 2) {
        let squareBg = map(mouseY, 0, height, 0, 400);
        fill(225, squareBg, 300);
      } else if ((i +j) % 4 === 3) {
        let squareBg = map(mouseY, 0, height, 0, 400);
        fill(225, squareBg, 400);
      }
      //https://editor.p5js.org/son/sketches/r10X961KX
      square(i * thesize,j * thesize, thesize);
      
    }
  }
}

function setGrad () {  
    
    for (var y = 0; y < height; y++) {
    var c1 = color(r, g, b);
    var c2 = color(r);
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1,c2,inter);
    stroke(c);
    line(0, y, width, y);
    noFill();
    }
  
    // // blendMode(DARKEST);
    // drawingContext.clip();
    // drawingContext.fillStyle = grd;
    // ellipse(mouseX,mouseY,100,100);
  }

function draw() {
  setGrad();

  r = r + 1;
  g = g - 1;
  
  
  if (r >= 255) {
  r = r;
  }
}