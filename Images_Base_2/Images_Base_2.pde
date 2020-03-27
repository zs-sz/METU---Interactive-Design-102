PImage img;
PGraphics layer;

void setup() {
  size(800, 800);
  img = loadImage("bg.png");
  layer = createGraphics(width/2, height);
}
void draw() {
  background(255);
  layer.beginDraw();
  layer.background(255);
  //layer.scale(-1.0,0.4);
  float animalt = map(mouseX,0, width, 0,700);
  layer.image(img, -(abs(animalt)),-160);
  layer.endDraw();
  
  
  image(layer,0,0);
  scale(-1.0,1.0);
  image(layer,-width,0);
}


void keyPressed() {
  if(key == 's') {
    saveFrame();
  }
}
