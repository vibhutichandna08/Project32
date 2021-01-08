class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction': 1.0,
        'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.visibility = 255;
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if (this.body.position.y >= 560) {
      push();
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      pop();
    } else {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      if (bgColor == 255) {
        strokeWeight(2);
        stroke(217, 82, 4);
        fill(242, 135, 5);
      } else {
        strokeWeight(2);
        stroke(0, 86, 148);
        fill(0, 143, 96);
      }
      rect(0, 0, this.width, this.height);
      pop();
    }
  }

  score() {
    if (this.visibility < 10 && this.visibility > -5) {
      score++;
    }
  }
}