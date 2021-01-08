const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bottomGround;
var gameState = "onSling";
var bgColor = 255;
var score = 0;

function setup(){
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ball = new Polygon(200, 200, 25, 6);

    //Middle Shelf
    box1 = new Block(525, 275, 25, 25);
    box2 = new Block(550, 275, 25, 25);
    box3 = new Block(575, 275, 25, 25);
    box4 = new Block(600, 275, 25, 25);
    box5 = new Block(625, 275, 25, 25);
    box6 = new Block(650, 275, 25, 25);
    box7 = new Block(675, 275, 25, 25);
    box8 = new Block(537, 250, 25, 25);
    box9 = new Block(562, 250, 25, 25);
    box10 = new Block(587, 250, 25, 25);
    box11 = new Block(612, 250, 25, 25);
    box12 = new Block(637, 250, 25, 25);
    box13 = new Block(662, 250, 25, 25);
    box14 = new Block(549, 225, 25, 25);
    box15 = new Block(574, 225, 25, 25);
    box16 = new Block(599, 225, 25, 25);
    box17 = new Block(624, 225, 25, 25);
    box18 = new Block(649, 225, 25, 25);
    box19 = new Block(561, 200, 25, 25);
    box20 = new Block(586, 200, 25, 25);
    box21 = new Block(611, 200, 25, 25);
    box22 = new Block(636, 200, 25, 25);
    box23 = new Block(573, 175, 25, 25);
    box24 = new Block(598, 175, 25, 25);
    box25 = new Block(623, 175, 25, 25);
    box26 = new Block(585, 150, 25, 25);
    box27 = new Block(610, 150, 25, 25);
    box28 = new Block(597, 120, 25, 25);

    //Top Shelf 
    cube1 = new Block(825, 175, 25, 25);
    cube2 = new Block(850, 175, 25, 25);
    cube3 = new Block(875, 175, 25, 25);
    cube4 = new Block(900, 175, 25, 25);
    cube5 = new Block(925, 175, 25, 25);
    cube6 = new Block(950, 175, 25, 25);
    cube7 = new Block(975, 175, 25, 25);
    cube8 = new Block(837, 150, 25, 25);
    cube9 = new Block(862, 150, 25, 25);
    cube10 = new Block(887, 150, 25, 25);
    cube11 = new Block(912, 150, 25, 25);
    cube12 = new Block(937, 150, 25, 25);
    cube13 = new Block(962, 150, 25, 25);
    cube14 = new Block(849, 125, 25, 25);
    cube15 = new Block(874, 125, 25, 25);
    cube16 = new Block(899, 125, 25, 25);
    cube17 = new Block(924, 125, 25, 25);
    cube18 = new Block(949, 125, 25, 25);
    cube19 = new Block(861, 100, 25, 25);
    cube20 = new Block(886, 100, 25, 25);
    cube21 = new Block(911, 100, 25, 25);
    cube22 = new Block(936, 100, 25, 25);
    cube23 = new Block(873, 75, 25, 25);
    cube24 = new Block(898, 75, 25, 25);
    cube25 = new Block(923, 75, 25, 25);
    cube26 = new Block(885, 50, 25, 25);
    cube27 = new Block(910, 50, 25, 25);
    cube28 = new Block(897, 20, 25, 25);

    //Bottom Shelf
    block1 = new Block(825, 475, 25, 25);
    block2 = new Block(850, 475, 25, 25);
    block3 = new Block(875, 475, 25, 25);
    block4 = new Block(900, 475, 25, 25);
    block5 = new Block(925, 475, 25, 25);
    block6 = new Block(950, 475, 25, 25);
    block7 = new Block(975, 475, 25, 25);
    block8 = new Block(837, 450, 25, 25);
    block9 = new Block(862, 450, 25, 25);
    block10 = new Block(887, 450, 25, 25);
    block11 = new Block(912, 450, 25, 25);
    block12 = new Block(937, 450, 25, 25);
    block13 = new Block(962, 450, 25, 25);
    block14 = new Block(849, 425, 25, 25);
    block15 = new Block(874, 425, 25, 25);
    block16 = new Block(899, 425, 25, 25);
    block17 = new Block(924, 425, 25, 25);
    block18 = new Block(949, 425, 25, 25);
    block19 = new Block(861, 400, 25, 25);
    block20 = new Block(886, 400, 25, 25);
    block21 = new Block(911, 400, 25, 25);
    block22 = new Block(936, 400, 25, 25);
    block23 = new Block(873, 375, 25, 25);
    block24 = new Block(898, 375, 25, 25);
    block25 = new Block(923, 375, 25, 25);
    block26 = new Block(885, 350, 25, 25);
    block27 = new Block(910, 350, 25, 25);
    block28 = new Block(897, 320, 25, 25);

    shelf1 = new Ground(900, 500, width / 6, 25);
    shelf2 = new Ground(900, 200, width / 6, 25);
    shelf3 = new Ground(600, 300, width / 6, 25);

    bottomGround = new Ground(width / 2, 590, width + 10, 25);
    topGround = new Ground(width / 2, 0, width + 10, 25);
    wallR = new Ground(1190, height / 2, 25, height + 10);
    wallL = new Ground(10, height / 2, 25, height + 10);

    slingshot = new SlingShot(ball.body, {x: 200, y: 200});

    getTime()
}

function draw(){
    background(bgColor);

    Engine.update(engine);

    ball.display()

    //Middle Shelf
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
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    //Top Shelf 
    cube1.display();
    cube2.display();
    cube3.display();
    cube4.display();
    cube5.display();
    cube6.display();
    cube7.display();
    cube8.display();
    cube9.display();
    cube10.display();
    cube11.display();
    cube12.display();
    cube13.display();
    cube14.display();
    cube15.display();
    cube16.display();
    cube17.display();
    cube18.display();
    cube19.display();
    cube20.display();
    cube21.display();
    cube22.display();
    cube23.display();
    cube24.display();
    cube25.display();
    cube26.display();
    cube27.display();
    cube28.display();

    //Bottom Shelf 
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();

    slingshot.display();

    //Middle Shelf Score
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
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();

    //Top Shelf Score
    cube1.score();
    cube2.score();
    cube3.score();
    cube4.score();
    cube5.score();
    cube6.score();
    cube7.score();
    cube8.score();
    cube9.score();
    cube10.score();
    cube11.score();
    cube12.score();
    cube13.score();
    cube14.score();
    cube15.score();
    cube16.score();
    cube17.score();
    cube18.score();
    cube19.score();
    cube20.score();
    cube21.score();
    cube22.score();
    cube23.score();
    cube24.score();
    cube25.score();
    cube26.score();
    cube27.score();
    cube28.score();

    //Bottom Shelf Score
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();

    shelf1.display();
    shelf2.display();
    shelf3.display();

    bottomGround.display();
    topGround.display();
    wallR.display();
    wallL.display();

    push()
    textSize(20);
    if (bgColor == 255) {
        fill("black");
    } else {
        fill("white");
    }
    text("Drag the Hexagon to Shoot", 100, 100);
    text("Press 'R' to Reattach the Hexagon", 100, 150);
    text("Score: " + score, 1050, 50);
    pop()
}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed() {
	if (keyCode == 82) {
		Body.setPosition(ball.body, { x: 200, y: 200 });
        slingshot.attach(ball.body);
        gameState = "onSling";
    }
}

async function getTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour >= 06 && hour <= 19){
        bgColor = 255;
    } else {
        bgColor = 0;
    }
}