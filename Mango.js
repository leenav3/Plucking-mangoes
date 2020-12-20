class Mango{
    constructor(x,y,diameter){
        var options={
            isStatic:true,
            friction:1,
            restitution:0
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.diameter);
        imageMode(CENTER);
        image(this.image,this.body.position.x+10,this.body.position.y,this.diameter+20,60);
    }
}