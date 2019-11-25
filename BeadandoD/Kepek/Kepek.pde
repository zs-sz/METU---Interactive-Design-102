PImage kep1;
PImage kep2;
PImage kep3;
PImage kep4;
PImage kep5;



PImage kivalasztottKep;
float racsMeret = 15; 
float kepMeret = 100;

void setup() {
	size(900,900);
	kep1 = loadImage("f1.png");
	kep2 = loadImage("f2.png");
	kep3 = loadImage("f3.png");
	kep4 = loadImage("f4.png");
	kep5 = loadImage("f5.png");
	kivalasztottKep = kep1;
	background(255);
}

void draw() {
	if(mousePressed) {
		image( 
			kivalasztottKep,
			mouseX - (kepMeret/2), 
			mouseY - (kepMeret/2),
			kepMeret,
			kepMeret
		);
	}

	kepMeret = 60 + (200 * noise(frameCount * 0.01));
}


void keyReleased() {
	// c torli a hatteret
	if(key == 'c') {
		background(255);
	}
	
	// kep elmentese
	if(key == 's') {
		saveFrame("#####-frame.png");
	}

	// melyik alakzatot rajzoljuk? 
	if(key == '1')  {kivalasztottKep = kep1; }
	if(key == '2')  {kivalasztottKep = kep2; } 
	if(key == '3')  {kivalasztottKep = kep3; }
	if(key == '4')  {kivalasztottKep = kep4; }
	if(key == '5')  {kivalasztottKep = kep5; }
}

// egesz szamra kerekites  
float quantizeNumber(float val, float quantum) {
  float remainder = val % quantum;
  float sign = val >= 0 ? 1 : -1;
  return val - remainder + sign * quantum;
};



