//const const é igual ao var — exceto que você não pode alterar o valor armazenado em const em qualquer lugar do programa.

const Engine = Matter.Engine; // é usado para criar o motor de física.
const World = Matter.World; // é usado para criar o mundo físico e adicionar objetos a ele.
const Bodies = Matter.Bodies; // é usado para criar os objetos físicos que habitam o mundo
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95, //quanto maior, mais leve se movimenta
    frictionAir:0.01 //quanto maior, mais lenta pula 
  }

  var rock_options = {
    restitution: 0.85, //quanto maior, mais leve se movimenta
  }
   
   var ground_options ={
     isStatic: true //se é verdadeiro, ele não se move. se é falso, ele se move. falso é a definição padrão
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine); //o mecanismo físico vai sendo atualizado a toda e qualquer modificação e movimentação
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,200,20);
 
}

