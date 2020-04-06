const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var boxes = [];

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    slider = createSlider(0, 100, 50);
    slider.position(40, 365);
    slider.input = map(engine.world.gravity, slider.min, slider.max, 0, 1);
 
function mousePressed() {
    if (mouseY < 400 && mouseX <400 ) {
        var rand = random(20,50);
        boxes.push(newBox(mouseX,mouseY,rand,rand));  
    }
}
 
function draw() {
    background(51);
    var val = slider.value();
 
    for (var i = 0; i < boxes.length; i++) {
        box[i].display();
    }
}
    ground = new Ground(200,400,400,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
}