class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':1.2,
            'friction':1.2,
            'density':0.8,
            'isStatic': false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
    
        World.add(world, this.body);
      }
      display(){
        
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("aqua");
        ellipse(0,0,this.radius,this.radius)
        pop();
      }
}
