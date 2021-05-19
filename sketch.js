var backimg,Background
var bucketimg,bucket
var fruit1_img,fruit2_img,fruit3_img,fruit4_img
var fruit1,fruit2,fruit3,bomb
var tryagain_img,tryagain
var fruits=0
var PLAY=1
var END=0
var gameState=1
function preload(){
backimg=loadImage("garden.jpg")
bucketimg=loadImage("bucket.png")
fruit1_img=loadImage("apple.png")
fruit2_img=loadImage("banana.png")
fruit3_img=loadImage("orange.png")
fruit4_img=loadImage("bomb.png")
tryagain_img=loadImage("game over.jpg")

}

function setup(){
createCanvas(700,700)

Background=createSprite(700,400,300,20)
Background.addImage(backimg)
Background.scale=3.0
Background.velocityY=3

bucket=createSprite(400,630,20,50)
bucket.addImage(bucketimg)
bucket.scale=0.2

tryagain=createSprite(400,400,100,100)
tryagain.scale=0.5
tryagain.addImage(tryagain_img)
tryagain.visible=false

fruit_1=new Group()
fruit_2=new Group()
fruit_3=new Group()
fruit_4=new Group()

fruits=0
}
function draw(){
        background("black")
if(keyDown("LEFT_ARROW")){
  bucket.x-=6
}
if(keyDown("RIGHT_ARROW")){
  bucket.x+=6
}
var selectstar=Math.round(random(1,4))
            if(World.frameCount%80 === 0){
                if(selectstar === 1){
                  apple()
                }
                if(selectstar === 2){
                  banana();
                }
                if(selectstar === 3){
                  orange();
                }
                if(selectstar === 4){
                  bombs();
                }     
              }
                         if(bucket.isTouching(fruit_1)){
                 fruit_1.destroyEach()
                 fruits=fruits+1
               }
               if(bucket.isTouching(fruit_2)){
                 fruit_2.destroyEach()
                fruits=fruits+1
              }
              if(bucket.isTouching(fruit_3)){
                fruit_3.destroyEach()
                fruits=fruits+1
              }
              if(gameState===END){
                fruit_4.destroyEach()
               fruit_3.destroyEach()
               fruit_2.destroyEach()
               fruit_1.destroyEach()
              tryagain.visible=true
               Background.velocityY=0
              
              }
              if(bucket.isTouching(fruit_4)){
                gameState=END
              }

                drawSprites()
              if(Background.y>550){
                Background.y=width/2
              }
     fill ("white")       
    textSize(20)
    text("Fruits : " +fruits, 600,100)
           
           }

        
                    function apple(){
                        fruit1=createSprite(500,Math.round(random(20,200)))
                        fruit1.addImage(fruit1_img)
                        fruit1.scale = 0.1
                         fruit1.velocityY =6 
                         fruit1.lifetime = 200
                         fruit_1.add(fruit1)
                    }
                      
                    function banana(){
                            fruit2=createSprite(600,Math.round(random(20,200)))
                          fruit2.addImage(fruit2_img)
                            fruit2.scale = 0.1
                             fruit2.velocityY =6
                             fruit2.lifetime = 200
                             fruit_2.add(fruit2)
                        }  
                    
                  function orange(){
                        fruit3=createSprite(300,Math.round(random(20,200)))
                        fruit3.addImage(fruit3_img)
                        fruit3.scale = 0.1
                         fruit3.velocityY =6
                         fruit3.lifetime = 200
                         fruit_3.add(fruit3)
                    }  
                    function bombs(){
                    bomb=createSprite(200,Math.round(random(20,200)))
                  bomb.addImage(fruit4_img)
                    bomb.scale = 0.1
                     bomb.velocityY =6
                     bomb.lifetime = 200
                     fruit_4.add(bomb)
                   }
         
                             
                       
                        
                    
                    













