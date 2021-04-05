
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ball
var roof

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


roof=Bodies.rectangle(200,100,200,20,{isStatic:true})
World.add(world,roof)
ball=Bodies.circle(200,220,40,{isStatic:false,restitution:1,density:0.4})
World.add(world,ball)
var options={bodyA:ball,bodyB:roof,stifness:0.00000000004,length:200}
holder=Constraint.create(options)
World.add(world,holder)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(roof.position.x,roof.position.y,200,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40)
  strokeWeight(5)
  stroke(255)
  line(ball.position.x,ball.position.y,roof.position.x,roof.position.y)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
	ball.position.x=mouseX
	ball.position.y=mouseY
	}
if(keyCode===ENTER){
	ball.position.x=200
	ball.position.y=220
}
}

