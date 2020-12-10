
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,rectangle;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(180,450,30); 
	bob2 = new Bob(240,450,30);
	bob3 = new Bob(300,450,30);
	bob4 = new Bob(360,450,30);
	bob5 = new Bob(420,450,30);

	box1 = new Box(180,150,60,60); 
	box2 = new Box(240,150,60,60);
	box3 = new Box(300,150,60,60);
	box4 = new Box(360,150,60,60);
	box5 = new Box(420,150,60,60);

	con1 = new Rope(box1.body,bob1.body)
	con2 = new Rope(box2.body,bob2.body)
	con3 = new Rope(box3.body,bob3.body)
	con4 = new Rope(box4.body,bob4.body)
	con5 = new Rope(box5.body,bob5.body)

    //rectangle = Bodies.rectangle(300,200,300,40);
	//World.add(world,rectangle);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  con1.display();
  con2.display();
  con3.display();
  con4.display();
  con5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  if(keyCode === LEFT_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
  }

  

  //rectMode(CENTER);
  //rect(300,200,300,40)
 
}



