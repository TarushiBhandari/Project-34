const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Body= Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6;
var toproof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  toproof= new Roof(380,60,325,15);
  bob1= new Bob(380,300,30);
  bob2= new Bob(bob1.x+60,300,30);
  bob3= new Bob(bob2.x+60,300,30);
  bob4= new Bob(bob1.x-60,300,30);
  bob5= new Bob(bob4.x-60,300,30);

  rope1= new Rope(bob1.body,toproof.body,0,0);
  rope2= new Rope(bob2.body,toproof.body,60,0);
  rope3= new Rope(bob3.body,toproof.body,120,0);
  rope4= new Rope(bob4.body,toproof.body,-60,0);
  rope5= new Rope(bob5.body,toproof.body,-120,0);

}

function draw() {
  background(58,165,36);  

  Engine.update(engine);
 
  toproof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  fill("white");
  textSize(20);
  text("DRAG THE MOUSE",300,400);

  fill("white");
  textSize(25);
  text("Newton's cradle is a device that demonstrates conservation of",600,100);
  text("momentum and energy using a series of swinging spheres.The",600,130);
  text("last sphere swings back and strikes the still nearly stationary",600,160);
  text("spheres, repeating the effect in the opposite direction.The device",600,190);
  text("is named after 17th-century English scientist Sir Isaac Newton.",600,220);
  text("The balls lose energy due to which after sometime the cradle stops",600,250);
}

function mouseDragged(){
  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
}



