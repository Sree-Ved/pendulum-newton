class Rope{
    constructor(bodyA,bodyB){
        var ropeops ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04
        }

        this.rope = Matter.Constraint.create(ropeops)
        World.add(world,this.rope)
    }
    
    display(){  

        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position

        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
        //line(bodyA.position.x, bodyA.position.y, bodyB.position.x, bodyB.position.y)
        }
    }
