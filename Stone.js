class Stone
{
	constructor(x,y,w,h)
	{
		var options={
			'restitution':1.8,
			'density':1.0,
			'friction':1.0			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
        this.image=loadImage("images/stone.png")
 		World.add(world, this.body);

	}
		
		
	
	display()
	{
		
		var groundPos=this.body.position
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

	



}