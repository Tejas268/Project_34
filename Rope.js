class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.7,
      length: 400,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    
  display() {
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    push();

    //set the value of stroke to hide the rope
    stroke(48, 22, 8);
    strokeWeight(4);

    line(pointB.x, pointB.y, pointA.x, pointA.y);

    pop();
  }
}
