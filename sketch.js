const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var track;
var girl;
var ground;
function preload(){
track=loadImage("track.jpg");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
 world= engine.world;
girl=new Player(100,300,150,150);
ground=createSprite(600,380,1200,20);
ground.shapeColor="white";
}

function draw() {
  background(track);  
  Engine.update(engine);
  girl.display();
  girl.collide(ground);
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  drawSprites();
 //if(flag==1){
  // textSize(30);
  // stroke(3);
 //  fill("lightblue");
 //  text("CRASH",500,200);
 //  crashSound.play();

 }

//  }


  function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(girl.body,{x:girl.body.position.x,y:girl.body.position.y},
        {x:0.5,y:0});
   }
  }

 
