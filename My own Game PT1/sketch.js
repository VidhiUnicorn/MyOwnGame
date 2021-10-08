var bt,heart,brain,lArm,Rarm,Lleg,Rleg,SI,LI;
var bti,hi,bi,lai,rai,lli,rli,sii,lii,box;
var brainfixed = false;
var heartfixed = false;
var SIfixed = false;
var LIfixed = false;
var Llegfixed = false;
var Rlegfixed = false;

function preload (){
  bti = loadImage("images/body template.png");
  hi = loadImage("images/heart.png");
  bi = loadImage("images/brain.png");
  lai = loadImage("images/arms .png");
  rai = loadImage("images/armsL.png");
  lli = loadImage ("images/Leg BonesL.png");
  rli = loadImage ("images/Leg BonesR.png");
  sii = loadImage("images/intestinesS.png");
  lii = loadImage ("images/intestines.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bt = new DetachedParts(width/2+200,height/2+50,100,400,bti)
  bt.resize(1.75)

  box = createSprite(width/2-250,height/2+50,350,800);
  box.shapeColor = "lightblue";

  heart = new DetachedParts (width/2-350,height/2-100,30,30,hi)
  heart.resize (0.3)

  Lleg = new DetachedParts (width/2-180,height/2-100,30,30,lli)
  Lleg.resize(0.3)

  lArm = new DetachedParts (width/2-350,height/2+80,30,30,lai)
  lArm.resize(0.2)

  LI= new DetachedParts (width/2-180,height/2+80,30,30,lii)
  LI.resize(0.5)

  SI = new DetachedParts (width/2-350,height/2+220,30,30,sii)
  SI.resize(0.5)

  Rarm = new DetachedParts (width/2-350,height/2+360,30,30,rai)
  Rarm.resize (0.2)

  brain = new DetachedParts (width/2-180,height/2+360,30,30,bi)
  brain.resize (0.3)

  Rleg = new DetachedParts (width/2-180,height/2+220,30,30,rli)
  Rleg.resize (0.3)
}

function draw() {
  background(255);
  
  
  if(mousePressedOver(brain.sprite)&& brainfixed === false){
    brain.sprite.x = mouseX;
    brain.sprite.y = mouseY;
  }
  if(mousePressedOver(heart.sprite)&& heartfixed === false){
    heart.sprite.x = mouseX;
    heart.sprite.y = mouseY;
  }
  if(mousePressedOver(SI.sprite)&& SIfixed === false){
    SI.sprite.x = mouseX;
    SI.sprite.y = mouseY;
  }
  if(mousePressedOver(LI.sprite)&& LIfixed === false){
    LI.sprite.x = mouseX;
    LI.sprite.y = mouseY;
  }
  if(mousePressedOver(Lleg.sprite)&& Llegfixed === false){
    Lleg.sprite.x = mouseX;
    Lleg.sprite.y = mouseY;
  }
  console.log(mouseX + " Y " + mouseY);
  
positioning(brain.sprite,brainfixed,0.25,1170,180,1160,1180,175,185)
positioning(heart.sprite,heartfixed,0.25,1195,370,1185,1205,365,375)
positioning(SI.sprite,SIfixed,0.55,1175,500,1165,1185,490,510)
positioning(LI.sprite,LIfixed,0.75,1170,500,1160,1180,490,510)
positioning(Lleg.sprite,Llegfixed,0.8,1268,787,1258,1278,777,797)


  drawSprites();
}

function positioning (s,state,size,fx,fy,sx,ex,sy,ey){
  if(s.x >=sx &&s.x <= ex && s.y >=sy &&s.y <= ey){
    state = true;
    s.x = fx;
    s.y = fy;
    s.scale = size
  }
  
}