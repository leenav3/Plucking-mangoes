class Tree {
    constructor(x,y,width,height){
      
       
        this.width = width;
        this.height = height;
        this.x = x;
        this.y=y;
        this.image = loadImage("Plucking mangoes/tree.png")
      //  World.add(world,this.body);   //tree is not interacting with any other objects.
    }
    display(){
     
        push ();
        imageMode(CENTER);
        image(this.image,this.x,this.y,400,this.height);
        pop ()
      }
    
};
