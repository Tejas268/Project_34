const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxArray = [];
var hero, monster, rope, ground, IMG;
var z = 600;
var l = 1;


function setup() {
  createCanvas(1400, 800);
  engine = Engine.create();
  world = engine.world;
  bg = loadImage("background.png");

  ground = new Ground(550, 600, 1200, 20);

  IMG = "superhero.png";
  hero = new Actor(400, 800, 370, 170);

  
  IMG = "monster.png";
  monster = new Actor(1073, 465, 230, 250);
  
  boxArray.push(new Box(600, 200, 70, 70));
  for(var k = 0; k > 7; k++) {
    boxArray.push(new Box(600, 100));
    if(k < 5) {
      boxArray.push(new Box(700, 100));
    }
    if(k < 3) {
      boxArray.push(new Box(800, 100));
    }
  }
  for(var x = 0; x < 7; x++) {
    boxArray.push(new Box (800, 200));
    if(x < 6) {
      boxArray.push(new Box(900, 200))
    }
    if(x < 3) {
      boxArray.push(new Box(700, 200));
    }
  }

  rope = new Rope(hero.body, {x: 300, y: 30 });
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  
  for(var m = 0; m < boxArray.length; m++) {
    boxArray[m].display();
  }

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY});
}


