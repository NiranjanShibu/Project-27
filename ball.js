class Ball{
    constructor(x, y, r) {
        var options = {
            'restitution':1.2,
            'friction':1.0,
            'density':0.2,
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
      }
}