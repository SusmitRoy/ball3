class Paper {
    constructor(x,y,radius){

        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,(this.radius-20)/2,options);

        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        circle(0,0,this.radius);
        image(this.image, 0, 0, this.radius);
        pop();
    }


}