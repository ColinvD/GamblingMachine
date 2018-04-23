class Wheel {
  constructor(offset, pos, vel, acc) {
    this.xOffset = offset;
    this.yPos = pos;
    this.yVel = vel;
    this.yAcc = acc;
  }

  draw(){
    for (var j = 0; j < imageArray.length; j++) {
      context.drawImage(imageArray[j], this.xOffset, (j*200+this.yPos+200)%(imageArray.length*200)-200, 200,200);
    }
  }
}
