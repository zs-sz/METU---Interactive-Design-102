var settings = {
	backgroundColor: '#1b1b1b'
};

function setup() {
	// makes a resizable fluid canvas (utils)
 	pixelDensity(displayDensity());
	Canvas.fluid(WEBGL);
	background('#1b1b1b');
}

function update() {

}

function windowResized() {
	// makes a resizable fluid canvas (utils)
	Canvas.fluid();	
}