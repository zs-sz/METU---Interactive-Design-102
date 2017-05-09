var settings = {
	backgroundColor: '#1b1b1b'
};

var sec = 0;
var min = 0;
var hour = 0;

function setup() {
	// makes a resizable fluid canvas (utils)
 	pixelDensity(displayDensity());
	initGui();
	Canvas.fluid();
	background(settings.backgroundColor);
}

function draw() {
	background(settings.backgroundColor);
	updateTime();
	var segmentWidth = 10;
	strokeWeight(7);
	stroke(255);

	// drawing a line for every hour
	for(var i = 0;i<hour;i++){
		line(
			200 + (i * segmentWidth),
			100,
			200 + ((i * segmentWidth) - 5) + segmentWidth - 5,
			100  
		)
	};

	// drawing a line for every minute
	for(var i = 0;i<min;i++){
		line(
			200 + (i * segmentWidth),
			200,
			200 + ((i * segmentWidth) - 5) + segmentWidth - 5,
			200  
		)
	};

	// drawing a line for every seconds
	for(var i = 0;i<sec;i++){
		line(
			200 + (i * segmentWidth),
			300,
			200 + ((i * segmentWidth) - 5) + segmentWidth -5,
			300  
		)
	}
}

function updateTime() {
	var now = new Date();

	sec = now.getSeconds();
    min = now.getMinutes();
    hour = now.getHours();


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
