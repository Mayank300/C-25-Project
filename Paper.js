 
class Paper extends BaseClass {
  constructor(x,y,radius){
  //   var options = {
  //     isStatic    : false, 
  //     restitution : 0.5,
  //     friction    : 0.5,
  //     density     : 1.2
      
  // }
    super(x,y,radius,radius);
    this.image = loadImage("sprites/paper.png");
    this.radius = radius;
  }

  display() {    
    super.display();
  }
}
