const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const button = document.getElementById('spin');

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
  for (var i = 0; i < wheel.length; i++)
  {
    a[i] = Math.floor(Math.random() * imageArray.length);
    wheel[i].rotate(a[i], (i + 1) * 1, 30);
  }
  console.log(a);
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
