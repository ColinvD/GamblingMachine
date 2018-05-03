class Wheel {
  constructor(offset, pos = 0, vel = 0, acc = 0, stopAt = 0)
  {
    this.xOffset = offset;
    this.yPos = pos;
    this.yVel = vel;
    this.yAcc = acc;
    this.stopAt = stopAt;
    this.done = true;
  }

  update()
  {
    this.yVel += this.yAcc;
    this.yPos += this.yVel;

    if(this.yPos >= this.stopAt)
    {
      this.yPos = this.stopAt;
      this.yVel = 0;
      this.yAcc = 0;
      this.done = true;
    }
  }

  rotate(y, rounds, speed)
  {
    this.done = false;
    this.yPos %= imageArray.length * 200;
    this.yVel = speed;
    if(this.yPos > y * 200)
    {
      this.stopAt = (y + (rounds + 1) * imageArray.length) * 200;
    }
    else
    {
      this.stopAt = (y + rounds * imageArray.length) * 200;
    }
  }

  draw(){
    for (var j = 0; j < imageArray.length; j++) {
      context.drawImage(imageArray[j], this.xOffset, (j*200+this.yPos+200)%(imageArray.length*200)-200, 200,200);
    }
  }
}
