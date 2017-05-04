function Node (pos, size) {
	this.pos = pos || createVector(0,0);
	this.size = size || 20;
	this.isClicked = false;
	this.zindex = 0;
	this.init();
}

Node.prototype.init = function() {
	this.render();
};

Node.prototype.render = function() {
	ellipse(this.pos.x, this.pos.y, this.size, this.size);
};

Node.prototype.checkClick() {
	var distance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
	if (mouseIsPressed && distance < this.size) {
		this.isClicked = true;
	}
}