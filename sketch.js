const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var myChain, roof;
var ball1, ball2, ball3, ball4, ball5;
var chain1, chain2, chain3, chain4, chain5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    roof = new Roof(600,20,300,20);

    ball1 = new Ball(600, 300, 20);
    ball2 = new Ball(642, 300, 20);
    ball3 = new Ball(684, 300, 20);
    ball4 = new Ball(558, 300, 20);
    ball5 = new Ball(516, 300, 20);

    
    chain1 = new Chain(ball1.body, roof.body, 0, 0);
    chain2 = new Chain(ball2.body, roof.body, 40, 0);
    chain3 = new Chain(ball3.body, roof.body, 80, 0);
    chain4 = new Chain(ball4.body, roof.body, -40, 0);
    chain5 = new Chain(ball5.body, roof.body, -80, 0);

    keyPressed();

}

function draw(){
    background("white");

    Engine.update(engine);

    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();

    roof.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();


}

function keyPressed(){

    if (keyCode === UP_ARROW){
    
    Matter.Body.applyForce(ball3.body, ball3.body.position, {x:12, y:-12});
    
    }
    
    
    }
