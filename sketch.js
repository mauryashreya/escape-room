

var bg,bg2,form,system,code,security,bg2img;
var score=0;
var timer;
var counter = 200;
var seconds, minutes;
var GameState=0;
var h1img,h1;
var h2,h2img;
var h3,h3img,h5,h5img;
var h4,h4img;
var h6,h6img;
var img;

function preload() {
 bg2img=loadImage("bg2.jpg")
 h1img=loadImage("hint.PNG")
 h2img=loadImage("water.png")
 h3img=loadImage("sponge.png")
 h4img=loadImage("key.PNG")
 h5img=loadImage("cap.png")
 h6img=loadImage("lock.png")
 img=loadImage("bg1.jpg")
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);

 security = new Security();
 system = new System();
 

  setInterval(timer,1000)
 
}

function draw() {
  background(bg2img);

 if (GameState===0){
   
  fill("black");
  textSize(40);
  stroke("pink");
  strokeWeight("3");
  textAlign(CENTER);
  text("Answer the questions truely to escape the room !!", width/2,150 );
  text("Remember  you have to answer all the questions to escape the room  ",width/2,200)
  text("Press Space to Start",width/2,650)
  image(img,600,250)
  security.hide()
 }
 if (keyDown("space")){

   GameState=1;
   
 }
 
  if(GameState===1){ 
   
   security.display()
   security.show()
   textSize(20);
   fill("black");
   text("Correct Answers: " + score, 500, 50);
   
   clues();
  
   h1=createSprite(470,650);
   h1.addImage(h1img)
   
   h2=createSprite(1400,600);
   h2.addImage(h2img);
   h2.scale=.75

   h3=createSprite(150,600);
   h3.addImage(h3img)

   h4=createSprite(1300,50);
   h4.addImage(h4img)
   
   h5=createSprite(400,250);
   h5.addImage(h5img)
   h5.scale =0.08;  
   
   h6=createSprite(800,300);
   h6.addImage(h6img)
   h6.scale=0.5
   
   
   textAlign(CENTER)
   fill("red")
   stroke("black")
   textSize(45)
   text(minutes + ":" + seconds,windowWidth-200,30);

  if(score === 1) {
    clear();
    GameState=2
    minutes=0;
    seconds=0;
    background("pink")
    stroke("RED")
    strokeWeight("3")
    fill("black")
    textSize(35);
    textAlign(CENTER)
    text("Congratulations!!",width/2,150)
    text("Bravo! You escaped from the room !!",width/2, 200);
    h4.destroy();
    h1.destroy();
    h3.destroy();
    h2.destroy();
    h5.destroy();
    h6.destroy();
    
   
    
  }
  if (minutes===0 && seconds === 0) {
    security.hide()
    GameState=2
    clear()
    text("You Lost ",width/2,height/2)
    h4.destroy();
    h1.destroy();
    h3.destroy();
    h2.destroy();
    h5.destroy();
    h6.destroy();
    
  }
  
  drawSprites()
}
}
 function timer() {
   if (counter > 0) {
     counter--;
   }

  minutes = Math.floor(counter/60);
  seconds = counter % 60;

 }

   
 function clues() {
    
    stroke("yellow");
    strokeWeight("2");
    fill("black");
    textSize(20);
    text("What invention lets you look right through a wall?", 100,100);
    fill("black");
   

    stroke("yellow");
    strokeWeight("2");
    fill("black");
    textSize(20);  
    text("You go at red and stop at green. What am I?",520,150);
   

    stroke("yellow");
    strokeWeight("2");
    fill("black");
    textSize(20);
    text("Which word becomes shorter when you add 2 letters to it? ", 1000,100);
    fill("black");
    
    stroke("yellow");
    strokeWeight("2");
   fill("black");
   textSize(20);
   text("I pass before the sun, yet make no shadow. What am I?", 20,400);
   fill("black");
  
   stroke("yellow");
    strokeWeight("2");
   fill("black");
   textSize(20);  
   text("The more there is, the less you see. What am I?", 600,500);
   fill("black");
  
   stroke("yellow");
   strokeWeight("2");
   fill("black");
   textSize(20);
   text("WHAT HAS HOLES BUT STILL HOLDS WATER ", 1000,400);
  
  
}
  
