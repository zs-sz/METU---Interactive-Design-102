var settings = {
	backgroundColor: '#1b1b1b',
	size: 50,
	fontSize: 15,
	margin: 10
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
	'y','z',
	'A','B','C','D','E','F',
	'G','H','I','J','K','L',
	'M','N','O','P','Q','R',
	'S','T','U','V','W','X',
	'Y','Z', 
	' ', '.', ',', '!', '?'
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
	renderLayout();
}

function renderLayout() {
	rows.forEach(function(row, rowIndex) {
		// console.log(rowIndex);
		rowWidth = (settings.size + settings.margin) * row.length;
		rowOffset = (width - rowWidth) / 2; 
		row.forEach(function(glyph, index) {
			glyph.x = rowOffset + (settings.size + settings.margin) * index;
			glyph.y = (settings.size + settings.margin) * (rowIndex + 1);
			glyph.size = settings.size;
			glyph.fontSize = settings.fontSize;
			glyph.render();
		});
	}); 
};

function keyPressed(event) {
	if (event.key === 'Enter' && currentRowIndex >= 0) {
		nextRow();
	} else if(event.key === 'Backspace') {
		removeGlyph();
	} else if (whiteList.includes(event.key)) {
		addGlyph(event.key);
	}
	console.log(event);
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
	g = new Glyph(char, settings.size, settings.fontSize);
	rows[currentRowIndex].push(g);
}

function windowResized() {
	// makes a resizable fluid canvas (utils)
	Canvas.fluid();
	background(settings.backgroundColor);
}

function initGui() {
	var gui = new dat.GUI();
	gui.close();
	gui.addColor(settings, 'backgroundColor');
	gui.add(settings, 'size', 100, 150);
	gui.add(settings, 'fontSize', 12, 64);
	gui.add(settings, 'margin', 0, 60);
}
