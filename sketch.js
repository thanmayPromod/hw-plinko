const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground1
var divi
var divi2
var divi3
var divi4
var divi5
var divi6
var divi7
var plink
function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;
  ground1=new Ground(150,620,700,100)
  divi=new division(40,480,20,200)
  divi2=new division(140,480,20,200)
  divi3=new division(240,480,20,200)
  divi4=new division(340,480,20,200)
  divi5=new division(440,480,20,200)
  divi6=new division(540,480,20,200)
  divi7=new division(640,480,20,200)
  plink=new plinko()
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  ground1.display()
  divi.display()
  divi2.display()
  divi3.display()
  divi4.display()
  divi5.display()
  divi6.display()
  divi7.display()
  drawSprites();
}