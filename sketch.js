
var box1,box2


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  box2 = createSprite(250,150,20,30);
  box1 = createSprite(200,100,35,45);
  box2.shapeColor = "red";
  box1.shapeColor = "green";
}

function draw() {
  background("blue");
  box2.x = World.mouseX;
  box2.y = World.mouseY; 
  if(box1.x-box2.x < box1.width/2+box2.width/2 &&
    box2.x-box1.x < box1.width/2+box2.width/2 &&
    box1.y-box2.y < box1.height/2+box2.height/2 &&
    box2.y-box1.y < box1.height/2+box2.height/2 ){
    box1.shapeColor = "yellow";
    box2.shapeColor = "yellow";
  }
  else{
    box2.shapeColor = "red";
  box1.shapeColor = "green";
  }
  drawSprites();
}