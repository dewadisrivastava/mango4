class Chain{
  constructor(pointA,bodyB){
      var options={
          pointA:pointA,
            bodyB:bodyB,
          stiffness:0.04,
          length:0.1
          
      }
      this.pointA=pointA
    this.chain=Constraint.create(options)
    World.add(world,this.chain)
    
  }

  fly(){
    this.chain.bodyB=null
  }
  
  display(){
    if(keyDown("space")){
      this.chain.bodyB=stone.body
    }
    if(this.chain.bodyB){
      var pointB=this.chain.bodyB.position
      var pointA=this.pointA
      strokeWeight(3)
     line(pointA.x,pointA.y,pointB.x,pointB.y)
     if(keyDown("space")){
       this.chain.bodyB
     }
    } 
  }
   
}