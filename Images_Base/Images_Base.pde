PImage img;

void setup() {
  size(800, 800);
  img = loadImage("bg.png");
  
}
void draw() {
  background(255);
  // show masked image
  //image(img, 0, 0,width/2,height);
  image(img, 400,-400,width/2,height);
  scale(-1,1);
  image(img, -width/2,-400,width/2,height);
  scale(1,-1);
  image(img, -400,-1200,width/2,height);
  scale(-1,1);
  image(img, 400,-1200,width/2,height);
  filter(BLUR, 2);
}
