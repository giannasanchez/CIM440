// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22


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
