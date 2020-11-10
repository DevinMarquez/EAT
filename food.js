function Food() {
  this.pos = createVector(random(width),random(height));
  this.vel = p5.Vector.random2D();
  this.r = random(8,22);
  
  this.show = function() {
    fill("red");
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }
  
  this.update = function() {
    this.pos.add(this.vel);
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
  
  this.over = function() {
    this.vel = createVector(0,0);
  }
}