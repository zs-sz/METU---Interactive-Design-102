var settings = {
	backgroundColor: '#1b1b1b'
};
var n;
function setup() {
	// makes a resizable fluid canvas (utils)
 	pixelDensity(displayDensity());
	initGui();
	Canvas.fluid();
	background(settings.backgroundColor);
	n = new Node();
	n.pos.x = 200;
	n.pos.y = 200;
}

function draw() {
	background(settings.backgroundColor);
	n.render();
	n.checkClick();
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
