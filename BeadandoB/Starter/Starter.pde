float oszlopokSzama = 20;
float oszlopSzelesseg = 0;
int kezdoOszlop = 1;
int seed = floor(random(999999));
void setup() {
	size(900, 900);
	rectMode(CENTER);
	oszlopSzelesseg = width / oszlopokSzama;
colorMode(HSB,360,100,100);
}

void draw() {
	//szinek
	//background(255);
	stroke(0,41);

	// rajzolj HA az eger gombja le van nyomva/
	if(mousePressed) {
		// ugras az egerpoziciohoz
		pushMatrix();
		translate(kezdoOszlop * oszlopSzelesseg,quantizeNumber(mouseY,5));
		line(0,0,oszlopSzelesseg,0);
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
		kezdoOszlop = floor(random(oszlopokSzama));
	}

	if(key == 'n') {
		kezdoOszlop = kezdoOszlop + 1;
		if(kezdoOszlop > oszlopokSzama)
			kezdoOszlop = 0;
	}

	if(key == 's') {
		saveFrame("#####-frame.png");
	}
}

float quantizeNumber(float val, float quantum) {
  float remainder = val % quantum;
  float sign = val >= 0 ? 1 : -1;
  return val - remainder + sign * quantum;
};
