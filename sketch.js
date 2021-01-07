const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;
  
  var o={
    isStatic:true
  }
  
  ground = Bodies.rectangle(200,390,400,20,o);
  World.add(world,ground);

  var c={
   restitution:1.0
  }
  
  ball = Bodies.circle(200,100,20,c);
  World.add(world,ball);
  
  //console.log(ground.position.y);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  //rect(200,200,50,50); 
  drawSprites();
}