Selector s;
PGraphics ui;
PGraphics rajzlap;

void setup () {
  size(600,600);
  ui = createGraphics(width,height);
  rajzlap = createGraphics(width,height);
  s = new Selector(ui);
  s.snapTo = 10;
}


void draw() {
  background(255);
  s.update();
  
  image(rajzlap,0,0);
  image(ui,0,0);
}


void mousePressed() {
  s.isActive = true;
  s.isMoving = false;
}


void mouseReleased() {
  s.isActive = false;
  s.isMoving = false;
  afterRelease();
}

void mouseDragged() {
  s.isMoving = true;
}

void afterRelease() {
  
}
