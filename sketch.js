var zoom = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noFill();
  strokeWeight(2);
  stroke(0, 0, 255);
  noLoop();
  
  drawCircle(width / 2, height / 2, 200+zoom, 200+zoom);
}


function drawCircle(x, y, d){
    
   ellipse(x, y, d, d);
   
   if(d > 20){
      
     drawCircle(x, y, d / 2);
     drawCircle(x+d, y, d / 2); 
     drawCircle(x-d, y, d / 2); 
     drawCircle(x, y+d, d / 2); 
     drawCircle(x, y-d, d / 2); 
   }
}

function mousePressed(){
  loop();
  background(255);
  zoom += 100;
  drawCircle(width / 2, height / 2, 200+zoom, 200+zoom);
}
