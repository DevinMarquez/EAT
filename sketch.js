var player;
var foods = [];
var score = 0;

function setup() {
  createCanvas(500, 500);
  player = new Player();
  for(var i = 0; i < 20; i++) {
    foods.push(new Food());
  }
}

function draw() {
  background(51);
  push();
  textSize(20);
  fill(255);
  var fc = frameCount/100;
  if(player.over == true) {
    fc = "25.00";
  }
  text("Score: " + score,280,30);
  text("Time: " + fc,380,30);
  pop();
  push();
  fill(255);
  textSize(12);
  text("Eat all the food before the time reaches 25!", 20,30);
  pop();
  player.show();
  player.update();
  player.edges();
  for(var i = 0; i < foods.length; i++) {
    foods[i].show();
    foods[i].update();
    foods[i].edges();
    if(frameCount % 2500 == 0 && score < score % 20 == 0 && frameCount > 0) {
      foods[i].over();
      player.over = true;
    }  
    if(player.eat(foods[i])) {
      foods.splice(i,1);
      score = score + 1;
    }
    if(foods.length <= 0) {
      frameCount = 0;
      for(var j = 0; j <= 20; j++) {
        foods.push(new Food());
      }
    }
    if(player.over == true) {
      push();
      fill(255);
      textSize(50);
      text("GAME OVER!",100,250);
      text("Press R to restart.",80,300);
      pop();
    }
  }
}

function keyPressed() {
  if(keyCode == UP_ARROW && player.over == false) {
    player.vel = createVector(0,-5);
  } else if(keyCode == DOWN_ARROW && player.over == false) {
    player.vel = createVector(0,5);
  } else if(keyCode == RIGHT_ARROW && player.over == false) {
    player.vel = createVector(5,0);
  } else if(keyCode == LEFT_ARROW && player.over == false) {
    player.vel = createVector(-5,0);
  }
  if(keyCode == 87 && player.over == false) {
    player.vel = createVector(0,-5);
  } else if(keyCode == 83 && player.over == false) {
    player.vel = createVector(0,5);
  } else if(keyCode == 68 && player.over == false) {
    player.vel = createVector(5,0);
  } else if(keyCode == 65 && player.over == false) {
    player.vel = createVector(-5,0);
  }
  if(keyCode== 82 && player.over == true) {
    player.pos.x = 250;
    player.pos.y = 250;
    frameCount = 0;
    score = 0;
    for(var i = 0; i < foods.length; i++) {
      foods.splice(i,20-score);
    }
    for(var i = 0; i <= 20; i++) {
      foods.push(new Food());
    }
    player.over = false;
  }
}