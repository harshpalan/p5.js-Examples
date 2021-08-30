let pg;
let colorPicker,colorPicker2;
function setup() {
  createCanvas(windowWidth,windowHeight);
  pg = createGraphics(windowWidth,windowHeight,P2D);
  colorPicker = createColorPicker('#E4DDE3');
  colorPicker2 = createColorPicker('#000000');
  // colorPicker.position(15, height + 5);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(colorPicker.color());
  
  // pg.background(100);
  pg.fill(colorPicker2.color()).textSize(150);
  pg.push();
  pg.textFont('Helvetica');
  pg.text('a', width/2, (height/2) - 120);
  pg.text('b', width/2, height/2);
  pg.text('c', width/2, (height/2) + 120);
  pg.pop();
  
  var tilesX = 10;
  var tilesY = 10;
  var tileW = width/tilesX;
  var tileH = height/tilesY;

  for(y=0;y< tilesY;y++){
    for(x=0;x<tilesX;x++){
      var wave = cos((frameCount)+x*y*0.05)*150;
      // var wave = sin((frameCount + ( x*y )) * 0.05) * 200;
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

      copy(pg,sx,sy,sw,sh,dx,dy,dw,dh);
    }
  }

  // image(pg, 0, 0);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}