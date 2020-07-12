class Helicopter{
constructor(x,y){
    var options={
        isStatic:true
    }
this.body=Bodies.rectangle(x,y,200,100,options)
World.add(world,this.body);
this.image=loadImage("helicopter.png")
}
display()

{

    var pos =this.body.position;
    
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle)
    imageMode(CENTER);
    strokeWeight(4);
    fill("red");
    image(this.image,0, 0, 200,100);
    pop();





}







}