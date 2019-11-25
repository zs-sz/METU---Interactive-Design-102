
float betumeret = 200;
color szovegSzin;
char betu;
float racsMeret =40;
void setup() {
	size(900,900);
	background(255);
	szovegSzin = color(51,51,51,150);
	smooth(16);
	key = 'a';
	textAlign(CENTER);
	betu = key;
	noStroke();
}

void draw() {
	if(mousePressed) {
		textSize(betumeret);
		float x = quantizeNumber(mouseX, racsMeret);
		float y = quantizeNumber(mouseY, racsMeret);
		if(frameCount % 50 == 0) {
			fill(255,0,0,30);
			float s = random(100,300);
			ellipse(x,y,s,s);
		}
		fill(255,51);
		text(betu,x, y+((betumeret+2)/2));
		fill(szovegSzin,60);
		text(betu,x, y+(betumeret/2));
		// minden tizedik frame utan
		
	}

	//betumeret = 100 + 200 * noise(frameCount * 0.01);
}


void keyReleased() {
	// 1 torli a hatteret

	if(key == '1'	) {
		background(255);
	}
	
	// 2 kep elmentese
	if(key == '2') {
		saveFrame("#####-frame.png");
	}
	// uj szin 
	szovegSzin = color(random(200), 150);

	if((key >= 'A' && key <= 'Z') || (key >= 'a' && key <= 'z')) {
		betu = key;
	}
}

// egesz szamra kerekites  
float quantizeNumber(float val, float quantum) {
  float remainder = val % quantum;
  float sign = val >= 0 ? 1 : -1;
  return val - remainder + sign * quantum;
};



