// kepkockak szama (mentesnel)
int kepkockakSzama = 30;
// elforgatas kepkockankent
float szog = 0;
void setup() {
	size(900,900);
	// TWO_PI = 360 fok (6.18 radians)
	szog = PI / kepkockakSzama;
	rectMode(CENTER);
}

void draw() {
	background(0);
	translate(width/2, height/2);
	rotate(szog * frameCount);
	rect(0,0,200,200);

	if(frameCount < kepkockakSzama) {
		saveFrame("#######-kepkocka.png");
	}
}