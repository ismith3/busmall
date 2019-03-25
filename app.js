'use strict';

var levels = [];

var images = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function Batch(img1, img2, img3) {
  this.img1 = img1;
  this.img2 = img2;
  this.img3 = img3;
}

for (var i = 0; i < 25; i++) {
  levels.push(i + 1);
  var randomIndex = Math.floor(Math.random() * (21 - 1)) + 1;
  console.log(randomIndex);
}

console.log(levels);