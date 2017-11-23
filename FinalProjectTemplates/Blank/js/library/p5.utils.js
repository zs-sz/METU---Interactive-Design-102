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

p5.prototype.strokeCloud = function(pathId, size) {
	var path = document.getElementById(pathId);
  var pointCloud = [];
  var pathLength = path.getTotalLength();

  for(var i = 0;i<size;i++) {
    var randomOffset = Math.round(Math.random() * pathLength);
    var randomPoint = path.getPointAtLength(randomOffset);
    var nextRandomPoint = path.getPointAtLength(randomOffset + 3);
    var angle = atan2(randomPoint.y - nextRandomPoint.y, randomPoint.x - nextRandomPoint.x);
    var v = new p5.Vector(randomPoint.x, randomPoint.y);
        v.angle = angle;
    pointCloud.push(v);
  }
  return pointCloud;
};

p5.prototype.fillCloud = function(pathId, size) {
	var path = new Path2D(document.getElementById(pathId).getAttribute('d'));
	ctx = drawingContext;
	if(!path) {
		console.log('no path element was found with this ID')
		return;
	}

  var pointCloud = [];
  
  for (var i = size - 1; i >= 0; i--) {
  	function search () {
  		var rndP = createVector(random(width), random(height));
  		if(ctx.isPointInPath(path, rndP.x, rndP.y)) {
  			pointCloud.push(rndP);
  		} else {
        search();
      }
  	}
    search();
  }

  return pointCloud;
};


function __grid(columns, colWidth) {
  this.columns = columns;
  if (colWidth) {
    this.colWidth = colWidth;
  } else {
    this.colWidth = width / this.columns + 1;
  }
  this.head = 0;
  this.currentRow = 0;
  this.currentPosition = createVector(0, 0);
}

__grid.prototype.next = function() {
  var currentCol = this.head % this.columns;
  var currentX = currentCol * this.colWidth;
  var currentY = this.currentRow * this.colWidth;
  this.currentPosition.x = currentX;
  this.currentPosition.y = currentY;
  if (currentCol == this.columns - 1) {
    this.currentRow++;
  }
  this.head++;
  return this.currentPosition;
};

__grid.prototype.reset = function() {
  this.head = 0;
  this.currentRow = 0;
}

p5.prototype.Grid = __grid;