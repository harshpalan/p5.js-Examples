let typoSketch = p =>{
	var pg;
	var colorPicker,colorPicker2,speedSlider;
	p.setup = function() {
		p.createCanvas(400,400);
		pg = p.createGraphics(400,400,p.P2D);
		colorPicker = p.createColorPicker('#E4DDE3');
		speedSlider = p.createSlider(0.0,1.0,0.00,0.01);
		colorPicker2 = p.createColorPicker('#000000');
		// frameRate(30);
		p.textAlign(p.CENTER, p.CENTER);
	}

	p.draw = function() {
		p.background(colorPicker.color());
		// pg.background('#EA0707');
		pg.fill(colorPicker2.color()).textSize(150);
		pg.push();
		pg.textFont('Helvetica');
		pg.text('a', p.width/2, (p.height/2) - 100);
		pg.text('b', p.width/2, (p.height/2) + 50);
		pg.text('c', p.width/2, (p.height/2) + 150);
		pg.pop();
		
		var tilesX = 8;
		var tilesY = 5;
		var tileW = p.width/tilesX;
		var tileH = p.height/tilesY;

		var speed = speedSlider.value();
		for(y=0;y< tilesY;y++){
			for(x=0;x<tilesX;x++){
				// var wave = cos((frameCount)+x*y*0.05)*150;
				var wave = p.sin((p.frameCount + ( x*y )) * speed) * 200;
				//source
				var sx =  x * tileW + wave;
				var sy =  y * tileH;
				var sw = tileW
				var sh = tileH;
				//destination
				var dx =  x * tileW ;
				var dy =  y * tileH;
				var dw = tileW
				var dh = tileH;

				p.copy(pg,sx,sy,sw,sh,dx,dy,dw,dh);
			}
		}
	}

	// p.windowResized = function(){
	// 	p.resizeCanvas(p.windowWidth/2, p.windowHeight/2);
	// 	p.background(colorPicker.color());
	// 	pg.reset();
	// }
}

var draw1 = new p5(typoSketch, window.document.getElementById('drawing1'));