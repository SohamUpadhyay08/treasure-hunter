var bg,bg2,form,system,code,security;
var harry,harryImage,answer
var score=0;
var sound

function preload() {
  bg = loadImage("bank.png");
  bg2 = loadImage("Treasur.png");
  harryImage = loadImage("harry.png")
  answer = loadImage("answers.png")
  sound = loadSound("score.wav")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

  harry = createSprite(400,420,20,20);
  harry.addImage(harryImage);
  harry.scale = 0.45
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  textSize(30);
  fill("black");
  text("Score: " + score, 440, 30);

  textSize(30)
  fill("red")
  text("GRINGOTTS treasure" ,345 , 80)

  textSize(25)
  fill("red")
  text("click on alohamora and say alohamora" ,60 , 240)
 

  // Add code to display the end screen
    if(score === 4){
      clear()
      harry.scale =  0.0001
      background(bg2)
      fill("white")
      textSize(40);
      text("TREASURE UNLOCKED",250,150)
    }


  drawSprites()

}