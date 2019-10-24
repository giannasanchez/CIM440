var snowX = [];
var snowY = [];
var snowAmount = 200;

var treeImage;
var snowImage;

var dropButton;
var dropping = false;

var wipeButton;
var wiping = false;

var houseColor = '#634227';
var fontSize = 80;

function setup() {
  // put setup code here

  createCanvas(800,650);
  treeImage = loadImage("tree.png");
  snowImage = loadImage("scene.png");

  dropButton = createButton("drop");
  dropButton.mousePressed(function(){
   dropping = true;
 });

 for(var i = 0; i<snowAmount; i++){
   snowX[i] = random(0,width); //random number is from 0-width-1 or 0-399
   snowY[i] = random(0, -500);
 }
 console.log("snowX " + snowX);
 console.log("snowY " + snowY);


 wipeButton = createButton("wipe");
 wipeButton.mousePressed(function(){
  wiping = true;
});


  for(var i = 0; i<snowAmount; i++){
    snowX[i] = random(0,width); //random number is from 0-width-1 or 0-399
    snowY[i] = random(0, -500);
  }
  console.log("snowX " + snowX);
  console.log("snowY " + snowY);
}

function draw() {
  // put drawing code here

  //sky

    background(snowImage);

    strokeWeight(3);
    stroke('#ded0cc');


  if(wiping == true){
    for(var y = 0; y<snowAmount; y++){


        snowX[y]++; //same as nowY[y] = snowY[y]+1
        //snowY[y] = snowY[y] +5;


    }
  }
  //tree
  image(treeImage, width / 2, height / 8, treeImage.width / 3, treeImage.height / 3);
  image(treeImage, width / 4, height / 8, treeImage.width / 3, treeImage.height / 3);

  fill(houseColor);
  //house
  //house
 rect(425,300,220,220);

 //chimney
 rect(455,200,20,100);

 //roof
 triangle(425,300, 540,200, 645,300);

 //door
 rect(510,470,60,50);

 //window
 rect(570,350,40,40);
 //window
 rect(460,350,40,40);
 //end house

  strokeWeight(4);
  stroke('black');
  //character 1 by by coloringchaos
  fill(255);
	ellipse(270, 500, 200, 200);
	ellipse(270, 375, 150, 150);
	ellipse(270, 275, 100, 100);

	//hat
	fill(0);
	rect(235, 140, 70, 100);
	ellipse(270, 240, 100, 10);

	//eyes
	ellipse(255, 265, 5, 5);
	ellipse(285, 265, 5, 5);

	//carrot
	fill(255, 165, 0);
	triangle(270, 275, 270, 285, 310, 300);

	//arms
	stroke('#634227');
	strokeWeight(5);
	line(200, 375, 120, 350);
	line(340, 375, 420, 350);

	//buttons
	fill(0);
	ellipse(270, 340, 7, 7);
	ellipse(270, 370, 7, 7);
	ellipse(270, 400, 7, 7);
  //end character 2

  textSize(fontSize);
  strokeWeight(4);
  stroke(0, 102, 153);
  fill(0, 102, 153);
  text('Happy Holidays', 140, 80);

  strokeWeight(1);
  rect(4,610,210,30);
  textSize(15);
  strokeWeight(0);
  stroke(255);
  fill(255);
  text('Press g to change house color', 6, 630);

  if(dropping == true){
    console.log("drop");

    fill(255);
    stroke(0);
    strokeWeight(1);

    for(var y = 0; y<snowAmount; y++){

      ellipse(snowX[y],snowY[y],10,10);
      if(snowY[y] < height -10){
        snowY[y]++; //same as nowY[y] = snowY[y]+1
        //snowY[y] = snowY[y] +5;
      }

    }

  }

}
function keyPressed(){
  houseColor = "Grey";
  console.log("key " + key);
  if(key == "g"){
      houseColor = "Grey";
    }
}
function mousePressed(){
  fontSize = 90;
}

function mouseReleased(){
  fontSize = 80;
}
