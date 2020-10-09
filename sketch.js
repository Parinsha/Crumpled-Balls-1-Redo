const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600,390,1200,20);

	paper = new Paper(200,350,25);
  
	dustbin1 = new Dustbin(1050,375,170,20);
	dustbin2 = new Dustbin(980,325,20,120);
	dustbin3 = new Dustbin(1140,325,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}
function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:133,y:-110})
	}
}


