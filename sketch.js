const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var engine,world,ground,ball;

function setup(){
  var canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var object_options={
  isStatic:true
}
ground=Bodies.rectangle(200,400,20,20,object_options);
World.add(world,ground);

var ball_object={
  restitution:5.0
}

ball=Bodies.rectangle(200,200,40,40,ball_object);
World.add(world,ball);
//console.log(object);
//console.log(object.position.x)
//console.log(object.position.y)


}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    rect(ball.position.x,ball.position.y,40,40);
  
}
