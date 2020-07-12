var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	//packageSprite=createSprite(width/2, 80, 10,10);
/*	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.debug=true;*/

	//helicopterSprite=createSprite(width/2, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-20, width,10);
	//groundSprite.shapeColor=color(255)
    

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	//World.add(world, packageBody);
	ground= new Ground(400,790,800,20);
package=new Package(400,260);
helicopter=new Helicopter(400,200);

	box1 =new Box(400,770,220,20);
	box2 = new Box(width/2 - 100,height-80,20,100);
	box3 = new Box(width/2 + 100,height-80,20,100);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
 // packageSprite.x= packageBody.position.x 
 // packageSprite.y= packageBody.position.y 
ground.display();
  package.display();
  helicopter.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



