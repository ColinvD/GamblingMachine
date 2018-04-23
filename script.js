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


var wheel = [];

for (var i = 0; i < 3; i++) {
  wheel[i] = new Wheel(210 * i, 0, 1, 0);
}

let done = true;

update();

function update() {
  requestAnimationFrame(update);
  context.clearRect(0,0,canvas.width, canvas.height);

  var num = Math.floor((n[0]+200 % (imageArray.length*200))/200);
  console.log(num);

  for (var i = 0; i < 3; i++) {
    wheel[i].update();
  }

  for (var i = 0; i < 3; i++) {
    wheel[i].draw();
  }

/*
  for (var i = 0; i < 7; i++) {
    context.drawImage(imageArray[i], 0, (i*200+n+200)%(imageArray.length*200)-200, 200,200);
  }
  for (var i = 0; i < 7; i++) {
    context.drawImage(imageArray[i], 210, (i*200+n+200)%(imageArray.length*200)-200, 200,200);
  }
  for (var i = 0; i < 7; i++) {
    context.drawImage(imageArray[i], 420, (i*200+n+200)%(imageArray.length*200)-200, 200,200);
  }
  */
}

/*
  elk plaatje in array met x-waarde bij de y toe voegen
  if(y%?){
  y = -
  }

*/

/*
function drawSlots(slot)
{
  for (var i = 0; i < 3; i++)
  {
    for (var j = 0; j < imageArray.length; j++) {
      context.drawImage(imageArray[j], i * 210, (j*200+slot[i]+200)%(imageArray.length*200)-200, 200,200);
    }
  }
}
*/

function drawReadyNumber(y)
{
  return Math.floor(y+200 % (imageArray.length*200));
}
