var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 rabbit.x = World.mouseX;
  //spawn apples
spawanapples()

  drawSprites();
}

//function to spawn the apples
function spawanapples(){
  if (frameCount%60==0) {
    apple = createSprite(200,50,40,40)
    apple.x = Math.round(random(50,350))
    apple.velocityY = 10
    apple.shapeColor = "red"
  }
  }
 













