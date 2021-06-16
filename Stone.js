class Stone{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0,
            friction:2,
            density:10,
			
        }
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("Plucking_mangoes/stone.png");
		this.body=Bodies.circle(x, y, this.r, options);
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}