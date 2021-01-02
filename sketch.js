const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var hoop;
var score=0;
var state=0;
function preload(){
    backgroundImage=loadImage("floor.jpg")
}
function setup(){
    var canvas = createCanvas(1000,900);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(200,890,1600,20)
    wall1=new Ground(990,990,20,2000);
    wall2=new Ground(0,990,20,2000);
    ground1=new Ground(200,10,1600,20);
   // mini1=new Ground(600,300,20,100)
    box1 = new Box(200,320,70,70);
    

    bird = new Bird(100,100);
   
    hoop=new Hoop(800,500);
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    textSize(30);
   text("score:"+ score,600,100);
    hoop.display();
 
    ground1.display();
ground.display();
wall1.display();
wall2.display();
//mini1.display();

box1.score();
box1.display();

bird.display();

}