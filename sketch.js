
var cake, cakeImage;
function preload(){
    cakeImage=loadImage("Cake.jpg")
}
function setup(){
    var canvas = createCanvas(400,400);
   cake=createSprite (200,200,150,150);
   cake.addImage(cakeImage)
    cake.scale=0.6;

}

function draw(){
    background(0);
   drawSprites();
}