class Package{
constructor(x,y)
{
this.body=Bodies.rectangle(x,y,50,50);
World.add(world,this.body);
    this.image=loadImage("package.png");
}
display()
{
var pos= this.body.position;
var angle =this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle)
    imageMode(CENTER);
    strokeWeight(4);
    fill("red");
    image(this.image,0, 0, 50,50);
    pop();




}








}