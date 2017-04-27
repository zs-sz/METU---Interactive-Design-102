var settings = {
	backgroundColor: '#1b1b1b',
	fillColor: '#ee4433',
	radius: 100
};

function setup() {
	init();
	fill(settings.fillColor);
	noStroke();
}

function draw() {
	background(settings.backgroundColor);
	fill(settings.fillColor);
	r = settings.radius;
	ellipse(width / 2, height / 2, r, r);
}

function windowResized() {
	// makes a resizable fluid canvas (utils)
	Canvas.fluid();
	background(settings.backgroundColor);
}

function init() {
	pixelDensity(displayDensity());
	Canvas.fluid();
	background(settings.backgroundColor);

	var gui = new dat.GUI();
			gui.remember(settings);
			gui.addColor(settings, 'backgroundColor');
			gui.addColor(settings, 'fillColor');
			gui.add(settings, 'radius', 10, 300);
}
