var backImage;
var remoteImage;

var gif_createImg;
var gif_createImg2;
var gif_createImg3;
var gif_createImg4;
var gif_createImg5;
var gif_createImg6;

var imageArray = [];

var hitX = [450,500];
var hitY = [445,460];

var hitSize = 50;


var currentImage = 0;

let attackLevel = 1.0;
let releaseLevel = 0;

let attackTime = 0.001;
let decayTime = 0.2;
let susPercent = 0.2;
let releaseTime = 0.5;

let env, triOsc;


function preload(){
  imageArray[0] = loadImage("glitch.gif");
  imageArray[1] = loadImage("sunken1.gif");
  imageArray[2] = loadImage("us.gif");
  imageArray[3] = loadImage("black.gif");
  imageArray[4] = loadImage("fight.gif");
  imageArray[5] = loadImage("moonlight.gif");
}

function setup() {
  // put setup code here
  createCanvas(1000,700);
  //SOUND
  let cnv = createCanvas(1000, 700);
  env = new p5.Envelope();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.start();
  triOsc.freq(220);
  cnv.mousePressed(playEnv);
  //IMAGE
  backImage = loadImage("tv.jpg");
  remoteImage = loadImage("remote.png");
  gif_createImg = createImg("sunken1.gif");
  gif_createImg2 = createImg("us.gif");
  gif_createImg3 = createImg("black.gif");
  gif_createImg4 = createImg("fight.gif");
  gif_createImg5 = createImg("moonlight.gif");
  gif_createImg6 = createImg("glitch.gif");

  gif_createImg.position(420,200);
  gif_createImg.size(180,180);
  gif_createImg2.position(420,200);
  gif_createImg2.size(180,180);
  gif_createImg3.position(420,200);
  gif_createImg3.size(180,180);
  gif_createImg4.position(420,200);
  gif_createImg4.size(180,180);
  gif_createImg5.position(420,200);
  gif_createImg5.size(180,180);
  gif_createImg6.position(420,200);
  gif_createImg6.size(180,180);


  gif_createImg.hide();
  gif_createImg2.hide();
  gif_createImg3.hide();
  gif_createImg4.hide();
  gif_createImg5.hide();
  gif_createImg6.hide();

}//end setup

function draw() {
  // put drawing code here
  background(backImage);
  //instructions
  textSize(15);
  strokeWeight(0);
  textStyle(NORMAL);
  fill(255);
  text('Click the left and right arrows on the remote to change the channel with sound.', 30, 630, 300,200);
  //TITLE
  textSize(43);
  textStyle(BOLD);
  fill(255);
  text('THE SUNKEN PLACE', 30, 520, 300, 200);
  //TITLE LAYERED
  textSize(43);
  fill(167);
  text('THE SUNKEN PLACE', 33, 524, 300, 200);



  image(remoteImage, width / 2.25, height / 1.7, remoteImage.width / 5, remoteImage.height / 5);

  if(currentImage == 1){
    fill("white");
    //TITLE
    textSize(30);
    textStyle(BOLD);
    text("Get Out", 453,50);
    //SUMMARY HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Summary",160,100,200,200);
    //SUMMARY
    textStyle(NORMAL);
    textSize(12);
    text("Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.", 160,130,200,200);
    //AWARDS HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Awards and Nominations", 700, 100, 300,200);
    //AWARDS
    textSize(12);
    textStyle(NORMAL);
    text("Academy Awards Best Original Screenplay, AFI Movie of the Year, Academy Awards Best Motion Picture of the Year Nominee, Academy Awards Best Performance by an Actor in a Leading Role Nominee, Best Achievement in Directing Nominee, Golden Globes Best Motion Picture Nominee, Golden Globes Best Performance by an Actor in a Motion Picture Nominee.", 700,130,200,200);
  }
  if(currentImage == 2){
    fill("white");
    //TITLE
    textSize(30);
    textStyle(BOLD);
    text("Us",490,50);
    //SUMMARY HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Summary",160,100,200,200);
    //SUMMARY
    textStyle(NORMAL);
    textSize(12);
    text("Accompanied by her husband, son and daughter, Adelaide Wilson returns to the beachfront home where she grew up as a child. Haunted by a traumatic experience from the past, Adelaide grows increasingly concerned that something bad is going to happen. Her worst fears soon become a reality when four masked strangers descend upon the house, forcing the Wilsons into a fight for survival. When the masks come off, the family is horrified to learn that each attacker takes the appearance of one of them.", 160,130,200,200);
    //AWARDS HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Awards and Nominations", 700, 100, 300,200);
    //AWARDS
    textSize(12);
    textStyle(NORMAL);
    text("Academy of Science Fiction, Fantasy and Horror Films Best Director Winner, Best Horror Film Nominee, Best Actress Nominee, Best Production Design Nominee, Best Editing Nominee, Best Editing Nominee, Best Writing Nominee, Best Performance by a Younger Actor Nominee.", 700,130,200,200);
  }
  if(currentImage == 3){
    fill("white");
    //TITLE
    textSize(30);
    textStyle(BOLD);
    text("BlacKkKlansman",380,50);
    //SUMMARY HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Summary",160,100,200,200);
    //SUMMARY
    textStyle(NORMAL);
    textSize(12);
    text("Ron Stallworth is the first African-American detective to serve in the Colorado Springs Police Department. Determined to make a name for himself, Stallworth bravely sets out on a dangerous mission: infiltrate and expose the Ku Klux Klan. The detective soon recruits a more seasoned colleague, Flip Zimmerman, into the undercover investigation of a lifetime. Together, they team up to take down the extremist hate group as the organization aims to sanitize its rhetoric to appeal to the mainstream.", 160,130,200,200);
    //AWARDS HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Awards and Nominations", 700, 100, 300,200);
    //AWARDS
    textSize(12);
    textStyle(NORMAL);
    text("Academy Awards Best Adapted Screenplay, BAFTA Best Adapted Screenplay Winner, Academy Awards Best Achievement in Music Written for Motion Pictures Nominee, Academy Awards Best Motion Picture of the Year Nominee, Academy Awards Best Achievement in Directing, Academy Awards Best Performance by an Actor in a Supporting Role Nominee, and Academy Awards Best Achievement in Film Editing Nominee.", 700,130,200,200);
  }
  if(currentImage == 4){
    fill("white");
    //TITLE
    textSize(30);
    textStyle(BOLD);
    text("Fight Club",430,50);
    //SUMMARY HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Summary",160,100,200,200);
    //SUMMARY
    textStyle(NORMAL);
    textSize(12);
    text("A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.", 160,130,200,200);
    //AWARDS HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Awards and Nominations", 700, 100, 300,200);
    //AWARDS
    textSize(12);
    textStyle(NORMAL);
    text("Awards Circuit Community Awards Best Adapted Screenplay Winner, Best Motion Picture Winner, Best Director Winner, Best Actor in a Leading Role Winner, Best Actor in a Leading Role Winner, Best Actress in a Supporting Role Winner, and Academy Awards Best Effects, Sound Effects Editing Nominee.", 700,130,200,200);
  }
  if(currentImage == 5){
    fill("white");
    //TITLE
    textSize(30);
    textStyle(BOLD);
    text("Moonlight",430,50);
    //SUMMARY HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Summary",160,100,200,200);
    //SUMMARY
    textStyle(NORMAL);
    textSize(12);
    text("A look at three defining chapters in the life of Chiron, a young black man growing up in Miami. His epic journey to manhood is guided by the kindness, support and love of the community that helps raise him.", 160,130,200,200);
    //AWARDS HEADER
    textSize(18);
    textStyle(BOLDITALIC);
    text("Awards and Nominations", 700, 100, 300,200);
    //AWARDS
    textSize(12);
    textStyle(NORMAL);
    text("Academy Awards Best Motion Picture of the Year Winner, Best Performance by an Actor in a Supportin Role Winner, Best Adapted Screenplay Winner, and Golden Globes Best Motion Picture - Drama Winner.", 700,130,200,200);
  }



}//end draw

function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    currentImage = currentImage - 1;
    if(currentImage == -1){
      currentImage = 5;
    }

    console.log("Clicked button 0 : " + currentImage );



  }//end of hit[0]
    if(mouseX > hitX[1] && mouseX < hitX[1] + hitSize && mouseY > hitY[1] && mouseY < hitY[1] + hitSize){
    currentImage = currentImage + 1;

    if(currentImage == 6){
      currentImage = 0;
    }

    console.log("Clicked button 1 : " + currentImage);

  }//end of hit[1] click


  if(currentImage == 0){
    gif_createImg.hide();
    gif_createImg2.hide();
    gif_createImg3.hide();
    gif_createImg4.hide();
    gif_createImg5.hide();
    gif_createImg6.show();
  }else if(currentImage == 1){
    gif_createImg.show();
    gif_createImg2.hide();
    gif_createImg3.hide();
    gif_createImg4.hide();
    gif_createImg5.hide();
    gif_createImg6.hide();
  }else if(currentImage == 2){
    gif_createImg.hide();
    gif_createImg2.show();
    gif_createImg3.hide();
    gif_createImg4.hide();
    gif_createImg5.hide();
    gif_createImg6.hide();
  }else if(currentImage == 3){
    gif_createImg.hide();
    gif_createImg2.hide();
    gif_createImg3.show();
    gif_createImg4.hide();
    gif_createImg5.hide();
    gif_createImg6.hide();
  }else if(currentImage == 4){
    gif_createImg.hide();
    gif_createImg2.hide();
    gif_createImg3.hide();
    gif_createImg4.show();
    gif_createImg5.hide();
    gif_createImg6.hide();
  }else if(currentImage == 5){
    gif_createImg.hide();
    gif_createImg2.hide();
    gif_createImg3.hide();
    gif_createImg4.hide();
    gif_createImg5.show();
    gif_createImg6.hide();
  }




}//end of mousePressed

function playEnv()  {
  env.play();
}
