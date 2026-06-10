// https://aphid.github.io/ct120/video/

let count = 8;

function setup() {
  createCanvas(400, 400);
  let thesize = width / count;
  print(thesize);
  
  let squareBg = map(mouseY, 0, height, 0, 500);
  fill(255, squareBg, 200);
  
  for (let i = 0; i< count; i++) {
    for (let j = 0; j < count; j++) {
      //if ((i + j) % 4 === 0){
      //  fill(122, 18, 144);
     // } else if ((i + j ) % 4 === 1) {
      //  fill(215, 62, 255);
      //} else if ((i + j) % 4 === 2) {
      //  fill(238, 183, 243);
      //} else if ((i +j) % 4 === 3) {
     //   fill(251, 238, 252);
     // }
      square(i * thesize,j * thesize, thesize);
      
    }
  }
}

function draw() {
}