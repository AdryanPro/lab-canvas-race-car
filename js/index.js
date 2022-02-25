const splashScreen = document.querySelector('.game-intro');
let backgroundGame;
let carPlayer;
let img;
let obstacle;
let obstacle1;
let obstacle2;
let obstacle3;

let speed = 4;
let speedLess = 4;


class player{
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw(){
    image(img, this.x, this.y, this.width, this.height);
  }

  moveX() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= speed;
      this.x = max(1, this.x);
      this.x = min(this.x, width - this.width - 1);
    }else if(keyIsDown(RIGHT_ARROW)){
      this.x += speed;
      this.x = max(1, this.x);
      this.x = min(this.x, width - this.width - 1);
    }
  }
}

/*
class obstacles{
  constructor(x, y, width, height){
    this.x = random(x);
    this.y = y;
    this.width = random(width);
    this.height = random(height);
  }
  draw(){
    let red = color(255, 0, 0);
    fill(red);
    rect(this.x, this.y, this.width, this.height)
  }
  moveY() {
    this.y --;
  }
}
*/

function preload(){
  backgroundGame = loadImage("../images/road.png");
  img = loadImage("../images/car.png")
}

function setup(){
  const canvas = createCanvas(500, 700);
  canvas.parent('game-board');
  carPlayer = new player(200, 550, 100, 150);
  //obstacle = new obstacles(0, 0, 0, 0);
}

function draw(){
  background(backgroundGame);
  carPlayer.draw(200, 550, 100, 150);
  carPlayer.moveX();
  //obstacle.draw(random(400), 0, random(380), random(80));
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    splashScreen.style.display = "none";
  }
};
