class paper{
    constructor(x,y,radius){
        var opt={
            isStatic:false,
            restitution:0.2,
            friction:0.9,
            density:1.2
        }
        this.body=Bodies.circle(x,y,5,opt)
        this.radius=70;
        this.image=loadImage("paper.png");
        World.add(world,this.body)
    }
    display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER);
	image(this.image, 0,0,this.radius)
    pop();
}
}