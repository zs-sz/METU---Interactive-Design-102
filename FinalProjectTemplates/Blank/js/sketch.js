var settings = {
	backgroundColor: '#1b1b1b'
};

function setup() {
	initGui();
	createCanvas(600,600);
	background(settings.backgroundColor);
}

function draw() {
	background(settings.backgroundColor);
	// CUSTOMIZE HERE
}

function initGui() {
	var gui = new dat.GUI();
	gui.addColor(settings, 'backgroundColor');
}
