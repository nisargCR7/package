var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground ,box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	
	

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	


	
	ground = new Ground(700,height,1400,20)

	box = new Box(400,220,50,50)


}




function draw() {
  rectMode(CENTER);
  background(0);
  
  
 box.display();
 ground.display();
 drawSprites();

}





