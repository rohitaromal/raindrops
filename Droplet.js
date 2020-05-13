class Droplet extends BaseClass
{ 
  

  constructor(x,y,radius)
  {

    super(x,y,50);

    this.body = Bodies.circle(x,y,this.radius);

    this.radius = radius;

    World.add(world,this.body);


  }


  fall()
  {

   this.body.velocity.y = 3;
  // this.body.velocity.y = velocityY;


  }

  display() 
  {
    // this.body.position.x = mouseX;
     //this.body.position.y = mouseY;
     super.display();
  }
}
