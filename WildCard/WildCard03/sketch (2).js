// https://aphid.github.io/ct120/video/

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

function draw() {
}