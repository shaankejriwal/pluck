class Boy extends BaseClass {
    constructor(x,y){
      super(x,y,200,200);
      this.image = loadImage("boy.png");
    }
  
    display() {
      super.display();
    }
  }