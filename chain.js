class Chain{

constructor(body1, body2, offsetX, offsetY){

    this.offsetX = offsetX;
    this.offsetY = offsetY;

    var options = {

        bodyA: body1,
        bodyB: body2,
        pointB: {x:this.offsetX, y:this.offsetY},
        stiffness: 0.2,
        length: 200

    }

    this.chain = Constraint.create(options);
    World.add(world, this.chain);

}

    display(){

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(3);

        var anchor1X = pointA.x;
        var anchor1Y = pointA.y;

        var anchor2X = pointB.x+this.offsetX;
        var anchor2Y = pointB.y+this.offsetY;

        line(anchor1X, anchor1Y, anchor2X, anchor2Y);

    }

}