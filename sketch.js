var monkey, monkeyanimation;

var  banana, bananaimg;

var rock, rockimg, rockgroup;

var bg, bgimg;

var score=0;

var invisibleground;

var invisibleline;

function preload(){
  
  monkeyanimation=loadAnimation("Monkey_01.png", "Monkey_10.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png");
  
  bgimg=loadImage("jungle.jpg");
  
  bananaimg=loadImage("banana.png");
  
  rockimg=loadImage("stone.png");
  
  bananagroup=new Group();
  
  rockgroup=new Group();
}

function setup() {
  createCanvas(400, 400);
  
  bg=createSprite(200,200);
  bg.addImage(bgimg);
  bg.velocityX=-5;
  
  monkey=createSprite(100,350);
  monkey.addAnimation("monkeywalking",monkeyanimation);
  monkey.scale=0.1;
  
  invisibleground=createSprite(200,380,400,40);
  invisibleground.visible=0;
  
  invisibleline=createSprite(200,360,400,10);
  invisibleline.visible=0;
}

function draw() {
  background(255);
  
  if(keyDown("space") && monkey.isTouching(invisibleline)){
    monkey.velocityY=-14;
  }
  
  for(var i=0; i<bananagroup.length; i++){
  if(monkey.isTouching(bananagroup)){
    score=score+1;
    bananagroup.get(i).destroy();
   }
  }      
  
  if(bg.x<0){
    bg.x=bg.width/2;
  }
  
  if(monkey.isTouching(rockgroup)){
    monkey.scale=0.1;
  }
  
  switch(score){
    case 10 : monkey.scale=0.2;
    break;
    case 20 : monkey.scale=0.3;
    break;
    case 30 : monkey.scale=0.4;
    break;
    case 40 : monkey.scale=0.5;
    break;
    case 50 : monkey.scale=0.6;
    break;
    default:break;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(invisibleground);
  
  bananas();
  
  rocks();
  
  drawSprites();
  
  fill("white");
  textSize(20);
  text("Score: "+score,300,50);
}

function bananas(){
  if(frameCount%80===0){
    banana=createSprite(450,random(200,300));
    banana.addImage(bananaimg);
    banana.scale=0.05;
    banana.velocityX=-5;
    bananagroup.add(banana);
  }
}

function rocks(){
 if(frameCount%150===0){
   rock=createSprite(450,350);
   rock.addImage(rockimg);
   rock.scale=0.17;
   rock.velocityX=-5;
   rock.lifetime=450/5;
   rockgroup.add(rock);
 }
}