function Glyph(letter, size, fontSize) {
	this.letter = letter;
	this.size = size || 90;
	this.fontSize = fontSize || 64;
	this.init();
	this.x = 0;
	this.y = 0
}

Glyph.prototype.init = function() {
	this.render();
}
Glyph.prototype.render = function() {
	textSize(this.fontSize);
	// textAlign(CENTER);
	var charSize = textWidth(this.letter);
	var paddingX = (this.size - charSize) / 2;
	var paddingY = (this.size / 2) - this.fontSize / 1.5;

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