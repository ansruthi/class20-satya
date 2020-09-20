
var movingRect,fixedRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(400,400,80,30);
  movingRect.shapeColor="blue";
  //movingRect.debug=true;
  //fixedRect.debug=true;
}

function draw() {
  background("black");  
 movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

  }
  else{

    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }

  drawSprites();
}