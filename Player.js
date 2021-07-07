class Player{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.image=loadImage("girl.png");
      this.width = width;
      this.height = height;
     // Matter.Body.setMass(this.body,this.body.mass*5);
    }
    display() {
       camera.position.x=this.body.position.x;
       camera.position.y=height/2;
      fill("white");
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }