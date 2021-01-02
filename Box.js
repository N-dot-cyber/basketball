class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image=loadImage("basketball.png")
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
 
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    console.log(this.body.position.x);
    console.log(this.body.position.y);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
 score(){
    if(this.body.velocity.x ===0 && this.body.velocity.y===0 && this.body.position.x>700 && this.body.position.y<500  ){
      console.log("over");
     score=score+1
   // return;

    }
   
  }
 
  
};
