var settings = {
	backgroundColor: '#1b1b1b',
	stroke: '#808080',
	innerStroke: '#70f2ad',
	curveDynamics: 0.5,
	thickness: 7,
	offset: 3,
	distance: 200
};
var n;
var nodes = [];
var nodesToDraw = [];
var selectedNodes = [];

function setup() {
	// makes a resizable fluid canvas (utils)
 	pixelDensity(displayDensity());
	initGui();
	Canvas.fluid();
	background(settings.backgroundColor);

	for (var i = 0; i < 30; i++) {
		n = new Node();
		n.pos.y = 200 + i * 20;
		n.pos.x = 200;
		nodes.push(n);
	};

	for (var i = 0; i < 40; i++) {
		n = new Node();
		n.pos.y = 100 + i * 20;
		n.pos.x = 400;
		nodes.push(n);
		// nodes[0].nodes.push(n);
	};

	for (var i = 0; i < 30; i++) {
		n = new Node();
		n.pos.y = 200 + i * 20;
		n.pos.x = 600;
		nodes.push(n);
		// nodes[0].nodes.push(n);
	};
}

function draw() {
	background(settings.backgroundColor);
	updateNodes();
}

function updateNodes() {

	if(selectedNodes.length === 2) {
		// selectedNodes[0].nodes.push(selectedNodes[1]);
		// nodesToDraw.push(selectedNodes[0]);
		resetSelection();
	}

	nodesToDraw.forEach(function(node){
		
		node.nodes.forEach( function (sibling){
			a = node.pos;
			b = sibling.pos;
			c = a.copy().lerp(b, settings.curveDynamics);
			noFill();
			strokeWeight(settings.thickness);
    		stroke(settings.stroke);
			bezier(
		        a.x, a.y,
		        a.x, c.y,
		        b.x, c.y,
		        b.x, b.y
		    );
		    strokeWeight(settings.offset);
		    stroke(settings.innerStroke);
			bezier(
		        a.x, a.y,
		        a.x, c.y,
		        b.x, c.y,
		        b.x, b.y
		    );
		});
	});

	nodes.forEach (
		function(node){
			node.render();
		}
	);
}

function windowResized() {
	// makes a resizable fluid canvas (utils)
	Canvas.fluid();
	background(settings.backgroundColor);
}

function mouseReleased() {
	nodes.forEach(function(node){
		node.checkClick();
	});
}

function keyPressed(event) {
	
	if (event.key === 'd') {
		deleteNodeConnections();
	}

	if (event.key === 'a') {
		connectOpposite();
	}

	if (event.key === 'v') {
		toggleNodes();
	}
}

function connectOpposite() {
	n = selectedNodes[0];
	nodes.forEach(function(node){
		if (node.pos.x !== n.pos.x) {
			n.nodes.unshift(node);
		} 
	});
	nodesToDraw.push(n);
	resetSelection();
}

function deleteNodeConnections() {
	if(selectedNodes.length > 0) {
		console.log(event);
		selectedNodes[0].nodes = [];
		selectedNodes[0].isSelected = false;
		selectedNodes = [];
	}
}

function resetSelection() {

	selectedNodes[0].isSelected = false;
	if(selectedNodes.length === 2)
		selectedNodes[1].isSelected = false;
	selectedNodes = [];
	console.log(selectedNodes);
}

function toggleNodes() {
	nodes.forEach(function(node){
		node.isVisible = !node.isVisible;
	});
}
function initGui() {
	var gui = new dat.GUI();
	gui.remember(settings);
	gui.addColor(settings, 'backgroundColor');
	gui.addColor(settings, 'stroke');
	gui.addColor(settings, 'innerStroke');
	gui.add(settings, 'curveDynamics', 0.1, 0.9, 0.01);
	gui.add(settings, 'thickness', 4, 20, 1);
	gui.add(settings, 'offset', 1, 4);
}