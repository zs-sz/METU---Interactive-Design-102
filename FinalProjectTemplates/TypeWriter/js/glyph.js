function Glyph(letter, size, fontSize) {
	this.letter = letter;
	this.size = size || 150;
	this.fontSize = fontSize || 64;
	this.init();
}

Glyph.prototype.init = function() {
	this.render();
}
Glyph.prototype.render = function() {
	textSize(this.fontSize);
	// textAlign(CENTER);
	var charSize = textWidth(this.letter);
	var padding = (this.size / 2) - (charSize / 2);
	fill(255);
	rect(0,0,this.size, this.size);
	fill(0);
	text(this.letter, padding, padding + (this.fontSize / 2));
	line(padding, 0,padding,200);
	line(padding + charSize, 0, padding + charSize,200);
}