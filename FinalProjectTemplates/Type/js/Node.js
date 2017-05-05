function Node (pos, size) {
	this.pos = pos || createVector(0,0);
	this.size = size || 10;
	this.isSelected = false;
	this.zindex = 0;
	this.isVisible = true;
	this.init();
	this.nodes = [];
	this.color = color(`hsla(${round(random(0,260))}, 70%, 80%,50)`);
}

Node.prototype.init = function() {
	// this.render();
};

Node.prototype.render = function() {
	if(this.isVisible) {
		strokeWeight(3)
		stroke(settings.stroke)
		fill(settings.backgroundColor);
		var d = dist(this.pos.x, this.pos.y, mouseX, mouseY) * 2;
		if(d < this.size) {
			fill(255);
		}
		if (this.isSelected) {
			fill(255,0,0);
		};
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
	}
};

Node.prototype.checkClick = function() {
	var distance = dist(this.pos.x, this.pos.y, mouseX, mouseY) * 2;
	if (distance < this.size) {
		console.log(distance);
		// console.log('click');
		this.isSelected = true;
		selectedNodes.push(this);
	}
}