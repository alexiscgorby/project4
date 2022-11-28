let img;
let width = width;
let height = height;

function preload () {
  img = loadImage("assets/veteran_memorial.jpg"); //veteran memorial image 

}

function setup() {
 createCanvas(1500,900);

}

function draw() { 
  background ("black");
  imageMode(CENTER);
  image(img, 750,450);
  noFill();
  stroke("darkred");
  strokeWeight(4); 
  rect(175, 365, 160, 50);
  rect(410, 365, 160, 50);
  rect(957, 374, 160, 50);
  rect(953, 543, 160, 40);
  rect(1181, 374, 170, 50);

function mouseClicked() {
  if (collidePointRect()){

  }
}




}
