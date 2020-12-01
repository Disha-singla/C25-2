
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var d1,d2,d3;

function preload()
{
	
} 

function setup() {
	createCanvas(1200, 600);
    keyPressed();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(100,450,70);
ground1=new ground(600,500,1200,20);
d3=new dustbin(880,370,180,230);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground1.display();
  d3.display();
  paper1.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:4,y:-5.5});
	}
}



