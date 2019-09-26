let snowflakes = [];
var counter;
var leveled = "";

function setup() {
  createCanvas(800, 600);
  fill(240);
  noStroke();
  
  }

function draw() {
  background(200, 162, 200);
  circle(mouseX, mouseY, 30, 30);
  
  textSize(35);
  // textAlign(105, 600);
  text('Level 1', 10, 30);
  textSize(15);
  // textAlign(165, 500);
  text('Move the ball with the mouse', 10, 55);  

  let t = frameCount / 60; 

  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  }

  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }

  textSize(40)
  text(counter, width-50, 40);
  textSize(35)
  text(leveled, width-500, 40);

}

function snowflake() {
  
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
    this.posY += pow(this.size, 0.5);
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
  rect(0, 60, 800, 25);
  rect(80, 120, 723, 20);
  rect(0, 120, 15, 723);
  rect(0, 580, 700, 20);
  rect(780, 120, 20, 723);
  rect(700, 309, 103, 20);
  rect(620, 489, 170, 20);
  rect(520, 220, 170, 20);
  rect(300, 220, 100, 20);
  rect(80, 220, 100, 20);
  rect(80, 220, 20, 100);
  rect(160, 300, 20, 100);
  rect(230, 130, 20, 200);
  rect(300, 300, 20, 90);
  rect(0, 390, 100, 20);
  rect(70, 490, 180, 20);
  rect(250, 410, 20, 100);
  rect(250, 390, 70, 20);
  rect(320, 480, 20, 100);
  rect(590, 240, 20, 170);
  rect(520, 240, 20, 100);
  rect(380, 240, 20, 100);
  rect(460, 390, 130, 20);
  rect(380, 340, 80, 20);
  rect(440, 340, 20, 70);
  rect(510, 390, 20, 90);
  rect(390, 460, 120, 20);
  rect(390, 420, 20, 50);
}

function startCountDown(seconds){
	counter = seconds;
	var interval = setInterval(() => {
		console.log(counter);
    counter--;
    
		if (counter < 0 ) {
			
			
      clearInterval(interval);
      leveled="Leveled Up!";
			console.log('Level Up!');
		}	
	}, 1000);
}

startCountDown(30);
//Console Output?//
//30
//20
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1
//Level Up!

