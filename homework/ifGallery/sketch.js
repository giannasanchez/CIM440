//https://pixabay.com/photos/amalfi-coast-italy-positano-2180537/
//https://pixabay.com/photos/panorama-the-cathedral-427997/
//https://pixabay.com/photos/paris-france-eiffel-tower-night-1836415/
//https://pixabay.com/photos/prague-praha-winter-night-3010407/
//https://pixabay.com/photos/oia-santorini-village-greece-416135/


var amalfi, barcelona, france, prague, santorini;
var aButton, bButton, fButton, pButton, sButton;

var currentImage = 0;

function preload(){
  amalfi = loadImage("images/amalfi.jpg");
  barcelona = loadImage("images/barcelona.jpg");
  france = loadImage("images/france.jpg");
  prague = loadImage("images/prague.jpg");
  santorini = loadImage("images/santorini.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  aButton = createButton("Amalfi");
  aButton.mousePressed(function(){

      currentImage=0;

  });

  bButton = createButton("Barcelona");
  bButton.mousePressed(function(){

      currentImage=1;

  });

  fButton = createButton("Paris");
  fButton.mousePressed(function(){

      currentImage=2;

  });

  pButton = createButton("Prague");
  pButton.mousePressed(function(){

      currentImage=3;

  });

  sButton = createButton("Santorini");
  sButton.mousePressed(function(){

      currentImage=4;

  });
}

function draw() {

  background(255);

  console.log("currentImage " + currentImage);
  // put drawing code here

  if(currentImage == 0){
    image(amalfi,0,0,amalfi.width/4,amalfi.height/4);
  }else if(currentImage == 1){
    image(barcelona,0,0,barcelona.width/4,barcelona.height/4);
  }else if(currentImage == 2){
    image(france,0,0,france.width/4,france.height/4);
  }else if(currentImage == 3){
    image(prague,0,0,prague.width/4,prague.height/4);
  }else if(currentImage == 4){
    image(santorini,0,0,santorini.width/4,santorini.height/4);
  }



}
