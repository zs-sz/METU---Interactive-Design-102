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
  // szurke hatter 
  translate(width/2, height/2);
	background(51);
  // vonalVastagsag
  strokeWeight(0);
  // atlatszo vonal: szin 0-255, atlatszosag 0-100
  stroke(120,80);
  // kitoltes szine
  fill(0);
  // kor = x, y, szelesseg, magassag 
	ellipse(cX, cY, r, r);
  // frameCount = aktualis kepkocka
  // a teljes kepernyo forgatasa 
  rotate(frameCount * 0.01);
  stroke(0,80);
  fill(255);
  rect(cX, cY, r/2, r/2,r/8);
  
  
  strokeWeight(r/8);
  // koordinata eltolasa kozepre
  float vonalhossz = r / 8;
  stroke(0);
  line(-vonalhossz,-vonalhossz,vonalhossz, vonalhossz);
  stroke(40);
  line(vonalhossz,-vonalhossz,-vonalhossz, vonalhossz);
}
