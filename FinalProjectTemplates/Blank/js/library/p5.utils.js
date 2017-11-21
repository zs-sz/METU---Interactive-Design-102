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
    var v = new p5.Vector(randomPoint.x, randomPoint.y);
    pointCloud.push(v);
  }
  
  var avX = 0;
  var avY = 0;
  
  pointCloud.forEach(function(p){
    avX += p.x;
    avY += p.y;
  });
  
  avX = avX / pointCloud.length;
  avY = avY / pointCloud.length;
  pointCloud.push(createVector(avX, avY));
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
