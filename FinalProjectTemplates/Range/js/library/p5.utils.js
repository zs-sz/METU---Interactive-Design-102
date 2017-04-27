// little helper for full size canvas
p5.prototype.Canvas = {
	alive: false,
	w: window.innerWidth,
	h: window.innerHeight,
	middle: new p5.Vector(),
	fluid(context) {
		this.w = window.innerWidth;
		this.h = window.innerHeight;
		this.middle.x = round(this.w/2);
		this.middle.y = round(this.h/2);
		if (this.alive) {
			resizeCanvas(this.w, this.h);
		} else {
			createCanvas(this.w, this.h, context);
			this.alive = true;
		}
	}
};