class Bob {
    constructor(x,y,r){
        var options= {
            'restitution':1.0,
            'isStatic':false,
            'friction':0,
            'density':0.4
        }

        this.x= x;
        this.y= y;
        this.r= r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
        
    }

    display(){
        
        var paperPos=this.body.position;
        push();
        fill("red");
        translate(paperPos.x,paperPos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}