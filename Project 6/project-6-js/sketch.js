// https://aphid.github.io/ct120/video/

let count = 20;

function setup() {
  createCanvas(400, 400);
  let thesize = width / count;
  print(thesize);
  for (let i = 0; i< count; i++) {
    for (let j = 0; j < count; j++) {
      if ((i + j) % 3 === 0){
        fill("#6D85E6");
      } else if ((i + j ) % 3 === 1) {
        fill ("#B1A9E8");
      } else if ((i + j) % 3 === 2) {
        fill("#A5B2E8");
      } else if ((i +j) % 3 === 3) {
        fill("#D5C5E8")
      }
      square(i * thesize,j * thesize, thesize);
    }
  }
}

function draw() {}