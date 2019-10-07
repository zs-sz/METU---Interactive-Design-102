float cX;
float cY;
float r;

void setup() {
  // dokumentum merete
	size(800,800,P2D);
  // szurke hatter 
	background(51);
	cX = 0;
	cY = 0;
  // cirlce radius
	r = height / 1.5;
  // negyzet MINDIG kozeppontbol van szamolva
  rectMode(CENTER);
  smooth(8);
}

void draw() {
	background(51);
  // xshape = x, y, meret, forgasi sebesseg 
  xShape(width/4,height/4, 400, 0.03);
  xShape(width-width/4,height-height/4, 200, 0.01);
}


void xShape(float x, float y, float r, float speed) {
  pushMatrix();
  translate(x,y);
  rotate(frameCount * speed);
  strokeWeight(0);
  stroke(120,80);
  fill(0);
  ellipse(cX, cY, r, r);
  stroke(0,80);
  fill(255);
  rect(cX, cY, r/2, r/2,r/8);
  strokeWeight(r/6);
  // koordinata eltolasa kozepre
  float vonalhossz = r / 8;
  stroke(0);
  line(-vonalhossz,-vonalhossz,vonalhossz, vonalhossz);
  stroke(40);
  line(vonalhossz,-vonalhossz,-vonalhossz, vonalhossz);
  popMatrix();
}
