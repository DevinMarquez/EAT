function Player() {
  this.pos = createVector(250,250);
  this.vel = createVector(0,0);
  this.r = 25;
  this.over = false;

  this.update = function() {
    push();
    this.pos.add(this.vel);
    this.vel.mult(0.88);
    pop();
  }  
  this.show = function() {
    fill("lime");
    rect(this.pos.x-this.r/2,this.pos.y-this.r/2,this.r,this.r);
  }
  
  this.edges = function() {
    if(this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if(this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if(this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if(this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }
  
  this.eat = function(food) {
    var d = dist(this.pos.x,this.pos.y,food.pos.x,food.pos.y);
    if(d < food.r) {
      return true;
    } else {
      return false;
    }
  }
}