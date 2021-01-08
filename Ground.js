class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      if (bgColor == 255) {
        strokeWeight(2);
        stroke(27, 65, 140);
        fill(114, 175, 218);
      } else {
        strokeWeight(2);
        stroke(135, 86, 0);
        fill(201, 128, 0);
      }
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
