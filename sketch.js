let pg;
let colorPicker,colorPicker2;
function setup() {
  createCanvas(400,400);
  pg = createGraphics(400,400,P2D);
  colorPicker = createColorPicker('#E4DDE3');
  colorPicker2 = createColorPicker('#000000');
  frameRate(30);
  textAlign(CENTER, CENTER);
  speedSlider = createSlider(0.0,1.0,0.05,0.01);
}

function draw() {
  background(colorPicker.color());
  // text('Speed:',100,400);
  // pg.background('#EA0707');
  pg.fill(colorPicker2.color()).textSize(150);
  pg.push();
  pg.textFont('Helvetica');
  pg.text('a', width/2, (height/2) - 100);
  pg.text('b', width/2, (height/2) + 50);
  pg.text('c', width/2, (height/2) + 150);
  pg.pop();
  
  var tilesX = 8;
  var tilesY = 5;
  var tileW = width/tilesX;
  var tileH = height/tilesY;

  var speed = speedSlider.value();
  for(y=0;y< tilesY;y++){
    for(x=0;x<tilesX;x++){
      // var wave = cos((frameCount)+x*y*0.05)*150;
      var wave = sin((frameCount + ( x*y )) * speed) * 200;
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

// function windowResized(){
//   resizeCanvas(400,400);
// }