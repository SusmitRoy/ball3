
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, box1, box2, box3;
var ground;
var launcher;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);

	box1 = new Box(680, 670, 200, 20);

	box2 = new Box(580, 620, 20, 100);

	box3 = new Box(780, 620, 20, 100);

	ball = new Paper(200, 350);

	launcher = new Launcher(ball.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  launcher.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}


