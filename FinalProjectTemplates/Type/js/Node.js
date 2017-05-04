function Node (pos, size) {
	this.pos = pos || createVector(0,0);
	this.size = size || 20;
	this.isClicked = false;
	this.zindex = 0;
	this.init();
}

Node.prototype.init = function() {
	// this.render();
};

Node.prototype.render = function() {
	ellipse(this.pos.x, this.pos.y, this.size, this.size);
};

Node.prototype.checkClick = function() {
	var distance = dist(this.pos.x, this.pos.y, mouseX, mouseY) / 2;
	if (mouseIsPressed && distance < this.size) {
		console.log(distance);
		// console.log('click');
		this.isClicked = true;
	}
}