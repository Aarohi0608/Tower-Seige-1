const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var bird, slingShot;
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(1015, 205, 220, 10);
    platform1 = new Ground(500, 330, 220, 10);

    box1 = new Box(950, 200, 30, 40);
    box2 = new Box(970, 200, 30, 40);
    box3 = new Box(1000, 200, 30, 40);
    box4 = new Box(1030, 200, 30, 40);
    box5 = new Box(1060, 200, 30, 40);
    box6 = new Box(1090, 200, 30, 40);

    box7 = new Box(970, 170, 30, 40);
    box8 = new Box(1000, 170, 30, 40);
    box9 = new Box(1030, 170, 30, 40);
    box10 = new Box(1060, 170, 30, 40);

    box11 = new Box(1000, 150, 30, 40);
    box12 = new Box(1030, 150, 30, 40);

    nbox1 = new Box(425, 300, 30, 40);
    nbox2 = new Box(455, 300, 30, 40);
    nbox3 = new Box(485, 300, 30, 40);
    nbox4 = new Box(515, 300, 30, 40);
    nbox5 = new Box(545, 300, 30, 40);
    nbox6 = new Box(575, 300, 30, 40);

    nbox7 = new Box(455, 290, 30, 40);
    nbox8 = new Box(485, 290, 30, 40);
    nbox9 = new Box(515, 290, 30, 40);
    nbox10 = new Box(545, 290, 30, 40);

    nbox11 = new Box(485, 250, 30, 40);
    nbox12 = new Box(515, 250, 30, 40);

    bird = new Bird(200, 100);

    slingShot = new SlingShot(bird.body, { x: 150, y: 150 });



}

function draw() {

    if (backgroundImg)
        background(backgroundImg);

    noStroke();
    textSize(35)
    fill("white")
    text("Score = " + score, width - 300, 50)

    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    platform.display();
    platform1.display();
    slingShot.display();

    bird.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    nbox1.display();
    nbox2.display();
    nbox3.display();
    nbox4.display();
    nbox5.display();
    nbox6.display();
    nbox7.display();
    nbox8.display();
    nbox9.display();
    nbox10.display();
    nbox11.display();
    nbox12.display();

      box1.score();
      box2.score();
      box3.score();
      box4.score();
      box5.score();
      box6.score();
      box7.score();
      box8.score();
      box9.score();
      box10.score();
      box11.score();
      box12.score();

      nbox1.score();
      nbox2.score();
      nbox3.score();
      nbox4.score();
      nbox5.score();
      nbox6.score();
      nbox7.score();
      nbox8.score();
      nbox9.score();
      nbox10.score();
      nbox11.score();
      nbox12.score();

    // if (box1.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }

    // if (box3.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }
    // if (box4.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }
    // if (box5.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }
    // if (box6.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }
    // if (box7.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }
    // if (box8.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }
    // if (box9.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }
    // if (box10.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }

    // if (box11.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }
    // if (box12.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }
    // if (box2.body.visibility < 0 && box1.body.visibility > - 105) {

    //     score = score + 10;

    // }

}

function keyPressed() {
    if (keyCode === 32) {
        slingShot.attach(bird.body);
    }
}


function mouseDragged() {

    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });



}
function mouseReleased() {

    slingShot.fly();
}

async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);

    if (hour >= 0600 && hour <= 1900) {
        bg = "bg1.png";
    }
    else {
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
