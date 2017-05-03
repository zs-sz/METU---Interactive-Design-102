var settings = {
	backgroundColor: '#1b1b1b'
};

var currentHeight = 0;
var baseHeight = 150; 
var mainFont;
var rows = [];
var currentRowIndex = 0;
var whiteList = [
	'a','b','c','d','e','f',
	'g','h','i','j','k','l',
	'm','n','o','p','q','r',
	's','t','u','v','w','x',
	'y','z'
];

rows.push([]);

function preload() {
  mainFont = loadFont('./SourceCodePro-Regular.otf');
}

function setup() {
	// makes a resizable fluid canvas (utils)
 	pixelDensity(displayDensity());
	initGui();
	textFont(mainFont);
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

function keyPressed(event) {
	if (event.key === 'Enter' && currentRowIndex >= 0) {
		nextRow();
	} else if(event.key === 'Backspace') {
		removeGlyph();
	} else if (whiteList.includes(event.key)) {
		addGlyph(event.key);
	}
	console.log(rows);
}

function keyTyped() {

}

function nextRow() {
	console.log('Enter');
	rows.push([]);
	currentRowIndex++;
}

function removeLastRow() {
	if(rows.length > 1) {
		rows.splice(currentRowIndex, 1);
		currentRowIndex--;
	}
}

function removeGlyph() {
	if(rows.length) {
		rows[currentRowIndex].splice(-1, 1);
		if(!rows[currentRowIndex].length) {
			removeLastRow();
		} 
	}
};

function addGlyph(char) {
	g = new Glyph(char);
	rows[currentRowIndex].push(g);
}