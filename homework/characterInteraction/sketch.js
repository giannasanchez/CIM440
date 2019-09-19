var pointX=0;
var pointY=0;

var pupil=15;
var thick=2;

var pupilColor = "green";
var faceColor = "cyan";
var mouthColor = "red";

var eyeButton;
var faceButton;


function setup() {
  // put setup code here


  createCanvas(500,500);
  pointX=width/2;
  pointY=height/2;
  console.log("pointX " + pointX + " pointY " + pointY);

  eyeButton = createButton("Click to change eyes, blue");
  eyeButton.position(150,10);
  eyeButton.mousePressed(function(){
    pupilColor = "blue";

  });


  faceButton = createButton("Click to turn green");
  faceButton.position(10,10);
  faceButton.mousePressed(function(){
    faceColor = "green";

  });
}


function draw() {
  // put drawing code here
  background(255);

  if(mouseX < height/2){
    console.log("bottom part");
    background("lightGreen");
  }
  if(mouseX > height/2){
    console.log("top part");
    background("orange");
  }

  pointX=mouseX;
  pointY=mouseY;


  strokeWeight(thick);
  fill(faceColor);
  rect(48,50,175,200);//mouth, x,y,l,w
  fill("white");
  ellipse(100,100,60,60);//left eye

  ellipse(170,100,60,60); //right eye
  fill(pupilColor);
  strokeWeight(0);
  ellipse(100,100,pupil,pupil);//left pupil

  ellipse(170,100,pupil,pupil); //right pupil
  strokeWeight(thick);
  line(130,100,140,100); //glasses middle
  line(70,100,48,85); //left glasses
  line(200,100,222,85);


  strokeWeight(thick);
  fill(mouthColor);
  arc(135,200,90,50,0,PI); //x,y,l,w,starting point,ending point (pi)

  //width and height
  //console.log("width" + width);
  //console.log("height" + height);
  fill(255, 238, 5);
  triangle(270/2,300/2,270/2 + 10, 300/2 + 10, 270/2 - 10, 300/2 + 10);

  line(80,250,80,350); //left leg
  line(190,250,190,350); //right leg
  line(80,350,110,350); //left foot
  line(190,350,220,350); //right foot
  line(223, 160, 250, 245); //right arm
  line(48,160,21,245); //left arm

} //end of draw

function mousePressed(){
  pupil = 23;
}

function mouseReleased(){
  pupil = 15;
}

function keyPressed(){
  mouthColor = "pink";
  console.log("key " + key);
  if(key == "p"){
      mouthColor = "pink";
    }

}
