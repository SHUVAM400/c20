var fixedRect,movingRect




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(200,150,50,20);
movingRect.shapeColor="green";

}

function draw() {
  background("black"); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
     && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
     && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
     && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="blue";
} 

  drawSprites();
}