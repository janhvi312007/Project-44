var girlImg,girl;
var butterflyImg;
function preload(){
  girlImg = loadImage("GirlCatchingButterfly.png");
  butterflyImg = loadImage("Butterfly1.png");
}

function setup() {
  createCanvas(1000,800);
   girl = createSprite(800, 550, 50, 50);
   girl.addImage(girlImg);
   girl.scale=0.8;
   
   
}

function draw() {
  background("lightblue");  
  drawSprites();
}