int alakzat = 2;
float racsMeret = 15; 

void setup() {
	size(900,900);
	background(200);

	rectMode(CENTER);
}

void draw() {
	// nem kell korvonal
	noStroke();
	// egerpozizio racsra igazitasa
	float x = quantizeNumber(mouseX, racsMeret);	
	float y = quantizeNumber(mouseY, racsMeret);	

	pushMatrix(); 
	translate(x,y);
	if(mousePressed) {
		rajzolj();
	}
	popMatrix();
}

void rajzolj() {
	if(alakzat == 1) {
		fill(255);
		ellipse(0, 0, racsMeret, racsMeret);
	}

	if(alakzat == 2) {
		fill(0);
		rect(0, 0, racsMeret, racsMeret);
	}
}



void keyReleased() {
	// c torli a hatteret
	if(key == 'c') {
		background(343);
	}
	
	// kep elmentese
	if(key == 's') {
		saveFrame("#####-frame.png");
	}

	// melyik alakzatot rajzoljuk? 
	if(key == '1')  {
		alakzat = 1;
	}

	if(key == '2')  {
		alakzat = 2;
	}	
}

// egesz szamra kerekites  
float quantizeNumber(float val, float quantum) {
  float remainder = val % quantum;
  float sign = val >= 0 ? 1 : -1;
  return val - remainder + sign * quantum;
};
