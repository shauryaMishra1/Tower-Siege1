class Box{
    constructor(x,y,width,height){
        var options ={
            restitution:0.4,friction:0
        }
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,this.width,height,options);
       // this.x=x;
       // this.y=y;
       
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
  var angle=this.body.angle;
  push()
  translate(pos.x,pos.y);  
    rotate(angle);
  rectMode(CENTER);
    
    rect(0,0,this.width,this.height);
pop()
}
}