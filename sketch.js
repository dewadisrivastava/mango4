
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world
var ground1
var boy
var tree1,tree2
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9
var chain1,chain2,chain3,chain4,chain5,chain6,chain7,chain8,chain9
var stone,stick,stick1

function preload(){
tree2=loadImage("images/tree.png")
}

function setup(){
  createCanvas(800,700)
  engine=Engine.create();
  world=engine.world;

  ground1=new ground(300,700,1000,50)
  boy=new Boy(100,600,100,150)
  tree1=createSprite( 450,340,200,350)
  tree1.addImage("tree1",tree2)
  mango1=new Mango(400,100,50,50)
  mango2=new Mango(500,120,50,50)
  mango3=new Mango(520,110,50,50)
  mango4=new Mango(500,120,50,50)
  mango5=new Mango(500,130,50,50)
  mango6=new Mango(490,118,50,50)
  mango7=new Mango(500,100,50,50)
  mango8=new Mango(490,110,50,50)
  mango9=new Mango(450,120,50,50)
  stick=new ground(530,130,350,10)
  stone=new Stone(130,115,40,40)
chain1= new Chain({x:170,y:480},stone.body);




}

function draw(){
  background("skyBlue")
  Engine.update(engine)


ground1.display()
boy.display()
tree1.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango9.display()
stone.display()
chain1.display()
stick.display()

text("press space for chance",200,200)


}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

		
}

function mouseReleased(){
chain1.fly()
}