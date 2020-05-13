const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var raindrops = [];



function setup() 
{

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  for(var i = 0;i< 10; i++)
  {
     raindrops = new Droplet(600,200,5);

  
  }

}

function draw() 
{
  background(255,25,255);  
  Engine.update(engine);

  drawSprites();

  for(var i = 0;i< 10; i++)
  {
     raindrops = new Droplet(600,400,5);
     raindrops.fall();
  }

  raindrops.display()
}