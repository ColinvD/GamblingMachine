const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const button = document.getElementById('spin');

let imageArray = [];
let directory = "./Images/";
let name = "test";
let format = ".jpg";

let hi = new Image();
hi.src = "./Images/Slots.png";
for (var i = 0; i < 7; i++) {
  imageArray[i] = new Image();
  imageArray[i].src = directory + name + i + format;
}
let buttonAmount = 0;

var wheel = [];
var a = [];

button.addEventListener("click", restart);

function start()
{
  for (var i = 0; i < 7; i++)
  {
    wheel[i] = new Wheel(210 * i);
  }

  update();
}

function restart()
{
  if(buttonAmount < 10){
    if(wheel[0].done == true && wheel[1].done == true && wheel[2].done == true && wheel[3].done == true && wheel[4].done == true){
      buttonAmount++;
      for (var i = 0; i < wheel.length; i++)
      {
        wheel[i].rotate(Math.floor(Math.random() * imageArray.length), (i + 1) * 2, 30);
      }
    }
  }
  else if (buttonAmount == 10) {
    console.log("You did it");
  }
  else{
    console.log("hi there");
  }
}

function update()
{
  requestAnimationFrame(update);
  context.clearRect(0,0,canvas.width, canvas.height);

  for (var i = 0; i < wheel.length; i++)
  {
    wheel[i].update();
  }

  for (var i = 0; i < wheel.length; i++)
  {
    wheel[i].draw();
  }
  context.drawImage(hi, 0,0);
}

function drawReadyNumber(y)
{
  return Math.floor(y+200 % (imageArray.length*200));
}

start();
