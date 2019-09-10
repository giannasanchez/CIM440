var eyeSize=60;
var pupil=15;
var glasses=85;
var leg=350;
var arm=245;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255,255,255);
}


function draw() {
  // put drawing code here
  strokeWeight(2);
  fill(123, 205, 237);
  rect(48,50,175,200);//mouth, x,y,l,w
  fill("white");
  ellipse(100,100,eyeSize,eyeSize);//left eye

  ellipse(170,100,eyeSize,eyeSize); //right eye
  fill(59, 120, 67);
  strokeWeight(0);
  ellipse(100,100,pupil,pupil);//left pupil

  ellipse(170,100,pupil,pupil); //right pupil
  strokeWeight(2);
  line(130,100,140,100); //glasses middle
  line(70,100,48,glasses); //left glasses
  line(200,100,222,glasses);


  strokeWeight(2);
  fill(255,0,0);
  arc(135,200,90,50,0,PI); //x,y,l,w,starting point,ending point (pi)

  //width and height
  //console.log("width" + width);
  //console.log("height" + height);
  fill(255, 238, 5);
  triangle(270/2,300/2,270/2 + 10, 300/2 + 10, 270/2 - 10, 300/2 + 10);

  line(80,250,80,leg); //left leg
  line(190,250,190,leg); //right leg
  line(80,350,110,leg); //left foot
  line(190,350,220,leg); //right foot
  line(223, 160, 250, arm); //right arm
  line(48,160,21,arm); //left arm
}
