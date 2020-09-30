class Stone extends BaseClass {
  constructor(x,y){
    var options={
      isStatic:false,
    }
    super(x,y,50,50);
    this.image = loadImage("stone.png");
  }

  display() {
    super.display();
  }
}