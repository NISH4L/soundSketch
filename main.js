//Credit goes to The Coding Train Youtube Channel

var fft;
var sounds = [];

function preload() {

   sounds[0] = loadSound("drum/lose2.mp3");
   sounds[1] = loadSound("drum/kick1.wav");
   sounds[2] = loadSound("drum/snare2.wav");
   sounds[3] = loadSound("drum/pop3.wav");
   sounds[4] = loadSound("drum/clap.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  angleMode(DEGREES);
  fft = new p5.FFT(0.9, 512);

}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  noStroke();
  translate(width/2-150, height / 2);

  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 0, 256, 100, 512);
    var y = r * cos(angle);
    var x = r * sin(angle);
    stroke(i, (100), (255));
    line(0, x, y, 0);

  }

  var spectrum2 = fft.analyze();
  noStroke();
  translate(width/4, height/2000);

  for (var j = 0; j < spectrum2.length; j++) {
    var angle = map(j, 0, spectrum2.length, 0, 360);
    var amp = spectrum2[j];
    var k = map(amp, 0, 256, 100, 512);
    var l = k * cos(angle);
    var m = k * sin(angle);
    stroke(j, 255, (255));
    line(0, 0, l, m);

  }

  //For Instruction
  textSize(30);
  fill("white");
  stroke("black");
  text("Press A, S, D, F for beats", -50, -200);

  textSize(30);
  fill("grey");
  stroke("black");
  text("Press P to load default song", -50, -170);

}


function keyPressed() {
  // for specific keys play and do specific thing
  if(key == 'A') {
    sounds[1].play();
    }
    if(key == 'S') {
    sounds[2].play();
    //sounds[0].play();
    }
    if(key == 'D') {
    sounds[3].play();

    }
    if(key == 'P') {
    sounds[0].play();

    }
    if(key == 'F') {
    sounds[4].play();

  }

}



