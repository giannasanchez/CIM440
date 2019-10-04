//https://pixabay.com/photos/amalfi-coast-italy-positano-2180537/
//https://pixabay.com/photos/panorama-the-cathedral-427997/
//https://pixabay.com/photos/paris-france-eiffel-tower-night-1836415/
//https://pixabay.com/photos/prague-praha-winter-night-3010407/
//https://pixabay.com/photos/oia-santorini-village-greece-416135/



var imageArray = [];

var aButton, bButton, fButton, pButton, sButton;

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
  image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);





}//end of draw
