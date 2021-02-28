const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground, ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  //Matter.Bodies.rectangle(x, y, width, height, [options]) 

  var ground_opt = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 390, 400, 20,ground_opt );
  World.add(world, ground);

  console.log(ground.position.x);
  console.log(ground.position.y);
  
  ball = Bodies.circle(200,25,20,{restitution: 1});
  World.add(world,ball);
}

function draw() {
  background("yellow"); 

  Engine.update(engine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x, ground.position.y, 400, 20);

  fill("pink");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,  20);
}