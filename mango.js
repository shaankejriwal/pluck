class mango extends BaseClass {
    constructor(x,y){
      var options={
        'isStatic':true,
        'restitution':0
      }
      super(x,y,50,50);
      this.image = loadImage("mango.png");
      
    }
  
    display() {
      super.display();
    }
  }