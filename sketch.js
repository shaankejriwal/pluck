
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,tree,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var tree1,stone;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height,1200,20);
  
  tree1 = new Tree(1000,300,200,200);

  mango1 = new mango(1050,300,10,5);
  
  mango2 = new mango(900,300,10,5);

  mango3 = new mango(1100,100,10,5);

  mango4 = new mango(1100,200,10,5);

  mango5 = new mango(1000,200,10,5);

  mango6 = new mango(1050,100,10,5);

  mango7 = new mango(1000,180,10,5);

  mango8 = new mango(1150,50,10,5);

  stone = new Stone(400,300,5,5);
 
  boy = new Boy(400,400,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  boy.display();
  stone.display();
  
  drawSprites();
 
}



