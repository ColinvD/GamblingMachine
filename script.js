const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let imageArray = [];
let directory = "./Images/";
let name = "test";
let format = ".jpg";

for (var i = 0; i < 7; i++) {
  imageArray[i] = new Image();
  imageArray[i].src = directory + name + i + format;
}

let done = true;
var wheel = [];

function start()
{
  for (var i = 0; i < 5; i++)
  {
    wheel[i] = new Wheel(210 * i);
    wheel[i].rotate(Math.floor(Math.random() * imageArray.length), (i + 1) * 2, 30);
  }

  update();
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
}

function drawReadyNumber(y)
{
  return Math.floor(y+200 % (imageArray.length*200));
}

start();
