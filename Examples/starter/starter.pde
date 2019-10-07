float cX;
float cY;
float r;

void setup() {
	size(900,900);
	background(51);
	cX = width / 2;
	cY = height / 2;
	r = 600;
}

void draw() {
	background(51);
	ellipse(cX, cY, r, r);
}