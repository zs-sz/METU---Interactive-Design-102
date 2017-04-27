var settings = {
	backgroundColor: '#1b1b1b'
};

function setup() {
	// makes a resizable fluid canvas (utils)
 	pixelDensity(displayDensity());
	initGui();
	Canvas.fluid();
	background(settings.backgroundColor);
}

function draw() {
	background(settings.backgroundColor);
}

function windowResized() {
	// makes a resizable fluid canvas (utils)
	Canvas.fluid();
	background(settings.backgroundColor);
}

function initGui() {
	var gui = new dat.GUI();
	gui.addColor(settings, 'backgroundColor');
}
