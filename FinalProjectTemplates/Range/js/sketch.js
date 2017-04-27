// references
// ARC https://p5js.org/reference/#/p5/arc
// MAP https://p5js.org/reference/#/p5/map



var rangeMax = 600;
var settings = {
	backgroundColor: '#1b1b1b',
	stroke: '#cccccc',
	range: 300
};

var rangeToAngle;



var ranges = {
	toAngle: [0, 360]
}

function setup() {
	// makes a resizable fluid canvas (utils)
 	
	initGui();
	Canvas.fluid();
	background(settings.backgroundColor);
}

function draw() {
	background(settings.backgroundColor);
	updateRanges();
	// CUSTOMIZE HERE
	noFill();
	stroke(settings.stroke);
	arc(
		width / 2, // x pos
		height / 2, // y pos
		300, // width
		300, // height
		0, // start angle (in radians 0 -> TWO_PI)
		radians(rangeToAngle) 
	);
}

function updateRanges() {
	// converting range to angle (degrees) 

	// minimum value
	var angleMin = ranges.toAngle[0];

	// maximum value 
	var angleMax = ranges.toAngle[1];

	// coverting range to angle 
	rangeToAngle = map(
		settings.range,			// value to interpolate 
		0,						// the minimum value
		rangeMax,				// the maximum value
		angleMin,				// desired scale min (0)
		angleMax				// desired scale max (360)
	);


	// your rangeconversion starts here

}

function windowResized() {
	// makes a resizable fluid canvas (utils)
	Canvas.fluid();
	background(settings.backgroundColor);
}

function initGui() {
	pixelDensity(displayDensity());
	var gui = new dat.GUI();
	gui.addColor(settings, 'backgroundColor');
	gui.addColor(settings, 'stroke');
	gui.add(settings, 'range', 0, 600);
}
