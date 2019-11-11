float columns = 20;
float singleColumn = 0;
int currentColumn = 1;
int seed = floor(random(999999));
void setup() {
	size(900, 900);
	rectMode(CENTER);
	singleColumn = width / columns;
colorMode(HSB,360,100,100);
}

void draw() {
	//szinek
	//background(255);
	stroke(0,21);
	

	// rajzolj HA az eger gombja le van nyomva/
	if(mousePressed) {
		// ugras az egerpoziciohoz
		pushMatrix();
		translate(currentColumn * singleColumn,quantizeNumber(mouseY,50)-50);
		rotate(QUARTER_PI);
		fill(360-360 * noise(200+frameCount * 0.001),40,70,218);
		// float  s = quantizeNumber(10 + 120 *  noise(frameCount * 0.03), 1);
		float  s = quantizeNumber(-3 + 81 *  noise(frameCount * 0.01), 20);
		rect(singleColumn/2,0,50,50);
		fill(360-438 * noise(frameCount * 0.031),40,83,218);
		ellipse(singleColumn/2,0,-s,-s);
		popMatrix();
	}
	strokeWeight(1);
}


void keyReleased() {
	// c torli a hatteret
	if(key == 'c') {
		background(343);
	}
	// 
	if(key == 'r') {
		seed = floor(random(frameCount));
		currentColumn = floor(random(columns));
	}

	if(key == 'n') {
		currentColumn = currentColumn + 1;
		if(currentColumn > columns)
			currentColumn = 0;
	}
}

float quantizeNumber(float val, float quantum) {
  float remainder = val % quantum;
  float sign = val >= 0 ? 1 : -1;
  return val - remainder + sign * quantum;
};
