function Glyph(letter, size, fontSize) {
	this.letter = letter;
	this.size = size || 90;
	this.fontSize = fontSize || 18;
	this.init();
	this.x = 0;
	this.y = 0
}

Glyph.prototype.init = function() {
	// this.render();
}

Glyph.prototype.render = function() {
	textSize(this.fontSize);
	// get the width of the text in pixels
	var charSize = textWidth(this.letter);

	// position the character to the middle 
	var paddingX = (this.size - charSize) / 2;
	var paddingY = (this.size / 2) - this.fontSize / 1.5;

	// YOUR DESIGN COMES HERE
	// draw the background here
	fill(255);
	rect(
		this.x,
		this.y,
		this.size,
		this.size
	);

	// draw the letter on top of the background
	fill(0);
	text(
		this.letter, 
		this.x + paddingX, 
		this.y + paddingY, 
		this.fontSize, 
		this.fontSize
	);
}