// https://aphid.github.io/ct120/video/

let count = 20;

function setup() {
  createCanvas(400, 400);
  let thesize = width / count;
  print(thesize);
  
  
function FirstOmbre(){
  
  let from = color(109, 133, 230);
  let to = color(193, 225, 232);

  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from,to, 0.66);
}

function SecondOmbre(){
  
  let from = color(177, 169, 232);
  let to = color(165, 178, 232);

  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);
}

function ThirdOmbre(){
  
  let from = color(241, 222, 246);
  let to = color(169, 86, 234);
  
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);
}

function FourthOmbre(){
  
  let from = color(251, 238, 252);
  let to = color(231, 125, 240);
  
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);
}
  
  for (let i = 0; i< count; i++) {
    for (let j = 0; j < count; j++) {
      if ((i + j) % 3 === 0){
        fill(251, 238, 252);
      } else if ((i + j ) % 3 === 1) {
        fill(231, 125, 240);
      } else if ((i + j) % 3 === 2) {
        fill(169, 86, 234);
      } else if ((i +j) % 3 === 3) {
        fill(193, 225, 232);
      }
      square(i * thesize,j * thesize, thesize);
    }
  }
}

function draw() {}