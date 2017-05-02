var settings = {
	backgroundColor: '#1b1b1b'
};

var currentHeight = 0;
var baseHeight = 150; 
var mainFont;
var rows = [];

function preload() {
  mainFont = loadFont('./SourceCodePro-Regular.otf');
}
var g;
function setup() {
	// makes a resizable fluid canvas (utils)
 	pixelDensity(displayDensity());
	initGui();
	textFont(mainFont);
	Canvas.fluid();
	background(settings.backgroundColor);
	g = new Glyph('G');
}

function draw() {
	background(settings.backgroundColor);
	g.render();
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

function keyPressed(event) {
	console.log(event);
}

function keyTyped() {

}

