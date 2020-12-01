class dustbin{
    constructor(x,y,width,height)
    {
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,opt)
        this.w=width;
        this.h=height;
        this.image=loadImage("dustbingreen.png")
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER);
        fill("white");
        image(this.image,pos.x,pos.y,this.w,this.h)
    }
}