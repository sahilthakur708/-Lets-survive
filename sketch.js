// creating global variables

var bgImg,invisibleGround;
var playerRightRunning,player;


var playerLeftRunning;
var playerStandingLeft;
var playerStandingRight;


var bombImage,bombExplodingImage;
var brickImage,coinImage;


var bg2Img,bg3Img,bg4Img;
var backGroundSound,bombExplodingSound;


var bulletFiringSound,healingSound;
var jamingMachineSound,jumpingSound;


var trapSound;
var drone,hangingTrap;
var enemyMachineGun;
var playButton,rock;
var playButtonImage;


var trap1,trap2;
var scientificEnemyGun,scientificTrap;
var smallGround;


var invisibleBrick,brickGroup;
var invisibleBrick;


const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies


var engine,world;
var bulletDirection="right"


var groundGroup,invisibleGroundGroup;
var ground;
var gun;


var scieFieGun;
var brick;


var scieFieGunBullets;
var scieFieGunBulletsImage,enemyMachineGunBulletsImage;
var playerBulletImage;

var gameState=0
var level1,level2,level3;
var level4,level5;
var level1Image,level2Image;
var level3Image,level4Image;

var level5Image;
var gun2,gunBullets2,brick2;
var brickBody,playerBody;


// function preload to load images

function preload (){


level1Image=loadImage("images/level 1.png")

level2Image=loadImage("images/level 2.png")

level3Image=loadImage("images/level 3.png")

level4Image=loadImage("images/level 4.png")

level5Image=loadImage("images/level 5.png")

 playerBulletImage=loadImage("images/playerBullet.png")

 enemyMachineGunBulletsImage=loadImage("images/MachineGunBullets image.png")

 scieFieGunBulletsImage=loadImage("images/scieFieGunBulletsimage.png")

 drone=loadImage("images/drone.png")

 hangingTrap=loadImage("images/hangingTrap.png")

 enemyMachineGun=loadImage("images/machine enemy.png")

 playButtonImage=loadImage("images/playsurvivel.png")

 rock=loadImage("images/rock.png")

 trap1=loadImage("images/trap1.png")

 trap2=loadImage("images/trap2.png")

 scientificEnemyGun=loadImage("images/scie fie enemy.png")

 scientificTrap=loadImage("images/scie-fi.png")

 smallGround=loadImage("images/small ground.png")

 trap2=loadImage("images/trap2.png")

 bombImage=loadImage("images/bomb.png")

 bombExplodingImage=loadImage("images/bombExploding.png")

 brickImage=loadImage("images/brick.png")

 coinImage=loadImage("images/coin.png")

 bgImg=loadImage("images/ground.jpg")

 playerRightRunning=loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png","images/player5.png","images/player6.png")

 playerStandingLeft=loadAnimation("images/leftPlayer1.png")

 playerStandingRight=loadAnimation("images/player1.png")

 playerLeftRunning=loadAnimation("images/leftPlayer1.png","images/leftPlayer2.png","images/leftPlayer3.png","images/leftPlayer4.png","images/leftPlayer5.png","images/leftPlayer6.png")

 bulletFiringSound=loadSound("sounds/bulletFiring.mp3")

 healingSound=loadSound("sounds/healing.mp3")

 jamingMachineSound=loadSound("sounds/jamingMachine.mp3")

 jumpingSound=loadSound("sounds/jumpingSound.mp3")

 trapSound=loadSound("sounds/trap.mp3")

 backGroundSound=loadSound("sounds/backGround.mp3")

 bombExplodingSound=loadSound("sounds/bombExplosion.mp3")

 bg2Img=loadImage("images/ground2.jpg")

 bg3Img=loadImage("images/ground3.jpg")

 bg4Img=loadImage("images/ground4.png")


}

// function preload ending here

// function setup starting


function setup() {


     createCanvas(windowWidth,windowHeight);


      engine = Engine.create();
      world = engine.world;


      invisibleGround=createSprite(width/2,height-70 , width*100, 50);
      invisibleGround.visible=false


      player=createSprite(width/2-50,height-280,10,10)

      playerBody=Bodies.rectangle(player.x,player.y,player.width,player.height)
      World.add(world,playerBody)

      player.addAnimation("running3",playerStandingRight)
      player.addAnimation("running1",playerRightRunning)
      player.addAnimation("running2",playerLeftRunning)
      player.addAnimation("running4",playerStandingLeft)
      

       brickGroup=createGroup()
       groundGroup=createGroup()
       invisibleBrickGroup=createGroup()

       playButton=createSprite(800,100)
       playButton.addImage(playButtonImage)
      
       level1=createSprite(800,200)
       level2=createSprite(800,300)
       level3=createSprite(800,400)
       level4=createSprite(800,500)
       level5=createSprite(800,600)
      


       level1.addImage(level1Image)
       level2.addImage(level2Image)
       level3.addImage(level3Image)
       level4.addImage(level4Image)
       level5.addImage(level5Image)
     


}


// function setup ending

//function draw starting


function draw() {

      background(255,255,255); 

      player.visible=false

      console.log(gameState)

if(gameState===0){

  level1.visible=false
       level2.visible=false
       level3.visible=false
       level4.visible=false
       level5.visible=false

        playButton.visible=true


     if(mousePressedOver(playButton)){
console.log("you are in line no. 236")
       gameState="selectLevel"
       playButton.visible=false

     }


    }

      if(gameState==="selectLevel"){

      
        level1.visible=true
        level2.visible=true
        level3.visible=true
        level4.visible=true
        level5.visible=true

        playButton.visible=false

        if(mousePressedOver(level1)){

          gameState="play1"
   
        }


        if(mousePressedOver(level2)){

          gameState="play2"
   
        }


        if(mousePressedOver(level3)){

          gameState="play3"
   
        }


        if(mousePressedOver(level4)){

          gameState="play4"
   
        }


        if(mousePressedOver(level5)){

          gameState="play5"
   
        }


      }


      if(gameState==="play1"){

       /* level1.visible=true
        level2.visible=true
        level3.visible=true
        level4.visible=true
        level5.visible=true*/

        player.visible=true

        level1.visible=false
       level2.visible=false
       level3.visible=false
       level4.visible=false
       level5.visible=false

        image(bgImg,0,0,width*2,height) 
        image(bg2Img,3600,0,width*2,height) 

        camera.x=player.x

        player.collide(invisibleGround)


        if(keyWentUp("left")){

          player.changeAnimation("running4",playerStandingLeft)
        
          }
        
        
          if(keyDown("left")){
        
            player.x-=18
        
            player.changeAnimation("running2",playerLeftRunning)
            bulletDirection="left"
        
          }
        
        
        if(keyWentUp("right")){
        
        player.changeAnimation("running3",playerStandingRight)
        
        }
        
        
        if(keyDown("right")){
        
            player.x+=18
        
            player.changeAnimation("running1",playerRightRunning)
            bulletDirection="right"
        
          }
        
        
        if(keyWentDown("space")){
        
              player.velocityY-=30
              jumpingSound.play()
        
        }
        
        
        if(keyWentDown("enter")){
          
          var bullets=createSprite(player.x+70,player.y-20,10,10)
         
          bulletFiringSound.play()
        
          if(bulletDirection==="right"){
        
          bullets.velocityX=40
        
          bullets.addImage(playerBulletImage)
         
        
        }
        
        else if(bulletDirection==="left"){
        
          bullets.velocityX=-40
        
          bullets.addImage(playerBulletImage)
          bullets.x=player.x-70
        
        }
        
        
        else{
        
          bullets.x=player.x-70
          bullets.velocityX=-40
          bullets.addImage(playerBulletImage)
        
        }

      }

      player.velocityY+=3

      spawnBricks2()
      spawnGuns2()

      drawSprites()

      }

      if(gameState==="play5"){



      image(bgImg,0,0,width*2,height) 
      image(bg2Img,3600,0,width*2,height) 
      image(bg3Img,7200,0,width*2,height)
      image(bg4Img,10400,0,width*2,height)

      camera.x=player.x

      player.collide(invisibleGround)


  if(keyWentUp("left")){

  player.changeAnimation("running4",playerStandingLeft)

  }


  if(keyDown("left")){

    player.x-=18

    player.changeAnimation("running2",playerLeftRunning)
    bulletDirection="left"

  }


if(keyWentUp("right")){

player.changeAnimation("running3",playerStandingRight)

}


if(keyDown("right")){

    player.x+=18

    player.changeAnimation("running1",playerRightRunning)
    bulletDirection="right"

  }


if(keyWentDown("space")){

      player.velocityY-=30
      jumpingSound.play()

}


if(keyWentDown("enter")){
  
  var bullets=createSprite(player.x+70,player.y-20,10,10)
 
  bulletFiringSound.play()

  if(bulletDirection==="right"){

  bullets.velocityX=40

  bullets.addImage(playerBulletImage)
 

}

else if(bulletDirection==="left"){

  bullets.velocityX=-40

  bullets.addImage(playerBulletImage)
 

}


else{

  bullets.x=player.x-70
  bullets.velocityX=-40
  bullets.addImage(playerBulletImage)

}


}
  

  player.velocityY+=3


    spawnBricks()
    spawnGround()

    spawnGuns()
    spawnSciFieGun()
    
    //invisibleBrickGroup.collide(player)
//player.bounceOff(groundGroup)
//player.bounceOff(brickGroup)


    drawSprites();


      }
      drawSprites()
      playerBody.position.x=player.x
      playerBody.position.y=player.y
      rect(playerBody.position.x,playerBody.position.y,100,100)
  
      
}

// function draw ending

// function spawn bricks for creating small bricks


function spawnBricks() {


  if (frameCount % 300 === 0) {


         brick = createSprite(14000,120,100,40);
        brick.y = Math.round(random(200,500));
        brick.addImage(brickImage);
        brick.velocityX = -10;
        brick.lifetime = 1500;
        brickGroup.add(brick)
       // invisibleBrick.visible=false
        

       }


}

// function spawn bricks ending

// function spawn ground starting for creating small grounds


function spawnGround() {


  if (frameCount % 300 === 0) {


         ground = createSprite(7000,120,100,30);
        ground.y= Math.round(random(200,500));
        ground.addImage(smallGround);
        ground.velocityX = -10;
        ground.lifetime = 700;
        groundGroup.add(ground)

       // invisibleBrick2.visible=false
       

       }


}

// function spawn ground ending

// function spawn guns starting for creating enemy gun


function spawnGuns(){


  if(frameCount%600===0){

    gun=createSprite(7000,110,100,20)
    gun.y=ground.y-20
    gun.x=ground.x
    gun.addImage(enemyMachineGun)
    gun.lifetime=700
    gun.velocityX=-10
    gun.scale=1/2


   setInterval(()=>{

    gunBullets=createSprite(gun.x-20,gun.y-30,10,5)
    gunBullets.velocityX=-30
    gunBullets.setlifetime=100
    gunBullets.addImage(enemyMachineGunBulletsImage)
    gunBullets.scale=1/3

   },2000)


  }


}

// function spawn guns ending

// function spawn sciFieGun for creating enemy powerfull gun


function spawnSciFieGun (){


if (frameCount%600===0){

scieFieGun=createSprite(14000,120,10,5)
scieFieGun.x=brick.x
scieFieGun.y=brick.y-20
scieFieGun.addImage(scientificEnemyGun)
scieFieGun.lifetime=1300
scieFieGun.velocityX=-10
scieFieGun.scale=1/3


setInterval(()=>{

  scieFieGunBullets=createSprite(scieFieGun.x-20,scieFieGun.y-20,10,20)
  scieFieGunBullets.velocityX=-30
  scieFieGunBullets.lifetime=200
  scieFieGunBullets.addImage(scieFieGunBulletsImage)
  scieFieGunBullets.scale=1/4

},2000)


}


}

// function spawn scieFieGun ending

function spawnBricks2() {


  if (frameCount % 200 === 0) {


         brick2 = createSprite(9000,120,100,40);
        brick2.y = Math.round(random(200,500));
        brick2.addImage(brickImage);
        brick2.velocityX = -10;
        brick2.lifetime = 900;
        brickGroup.add(brick2)
       // invisibleBrick.visible=false
        brickBody=Bodies.rectangle(brick2.x,brick2.y,brick2.width,brick2.height)
World.add(world,brickBody)
brickBody.position.x=brick2.x
brickBody.position.y=brick2.y
rect(brickBody.position.x,brickBody.position.y,100,100)

       }


}


function spawnGuns2(){


  if(frameCount%400===0){

    gun2=createSprite(9000,110,100,20)
    gun2.y=brick2.y
    gun2.x=brick2.x
    gun2.addImage(enemyMachineGun)
    gun2.lifetime=900
    gun2.velocityX=-10
    gun2.scale=1/2


   setInterval(()=>{

    gunBullets2=createSprite(gun2.x-20,gun2.y-30,10,5)
    gunBullets2.velocityX=-30
    gunBullets2.lifetime=130
    gunBullets2.addImage(enemyMachineGunBulletsImage)
    gunBullets2.scale=1/3
    console.log("inside set interval of spawn guns 2")

   },1000)


  }


}
