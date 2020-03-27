PImage img;
PGraphics layer;

void setup() {
  size(800, 800);
  img = loadImage("bg.png");
  layer = createGraphics(100, height);
}
void draw() {
  background(255);
  layer.beginDraw();
  layer.image(img,-35,0);
  layer.endDraw();
  image(layer,0,0);
}
