//https://pixabay.com/photos/amalfi-coast-italy-positano-2180537/
//https://pixabay.com/photos/panorama-the-cathedral-427997/
//https://pixabay.com/photos/paris-france-eiffel-tower-night-1836415/
//https://pixabay.com/photos/prague-praha-winter-night-3010407/
//https://pixabay.com/photos/oia-santorini-village-greece-416135/



var imageArray = [];

var hitX = [100,200];
var hitY = [300,300];

var hitSize = 50;


var currentImage = 0;

function preload(){
  imageArray[0] = loadImage("images/amalfi.jpg");
  imageArray[1] = loadImage("images/barcelona.jpg");
  imageArray[2] = loadImage("images/france.jpg");
  imageArray[3] = loadImage("images/prague.jpg");
  imageArray[4] = loadImage("images/santorini.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);


}

function draw() {

  background(255);
  image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);

  rect(hitX[0],hitY[0],hitSize,hitSize);
  rect(hitX[1],hitY[1],hitSize,hitSize);



}//end of draw


function mousePressed(){
  if(mouseX < hitX[0] && mouseX > hitX[0] + hitSize && mouseY < hitY[0] && mouseY > hitY[0] + hitSize){
    console.log("Clicked button 0");
    currentImage = currentImage - 1;
    if(currentImage == 5){
      currentImage = 4;
    }
  }//end of hit[0]
    if(mouseX > hitX[1] && mouseX , hitX[1] + hitSize && mouseY > hitY[1] && mouseY < hitY[1] + hitSize){
    console.log("Clicked button 1");
    currentImage = currentImage + 1;
    if(currentImage == 5){
      currentImage = 0;
    }
  }//end of hit[1] click
}//end of mousePressed
