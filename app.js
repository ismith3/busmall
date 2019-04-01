'use strict';

var sets = [];

var graphData;

if (localStorage.getItem('isComplete') !== 'true') {
  graphData = [];
} else if (localStorage.getItem('isComplete') === 'true'){
  graphData = JSON.parse(localStorage.getItem('userData'));
}

renderGraph();

console.log(graphData);


var images = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];


function Set(img1, img2, img3) {
  this.img1 = img1;
  this.img2 = img2;
  this.img3 = img3;
}

function renderGraph() {
  var ctx = document.getElementById('myChart');
  ctx.style.display='block';
  var myChart = new Chart(ctx, {
    responsive: true,
    maintainAspectRatio: true,
    type: 'bar',
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
      datasets: [{
        label: '# of clicks',
        data: graphData
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


function complete() {
  for (var i = 0; i < 20; i++) {
    graphData.push(Math.floor(Math.random() * 5));
  }
  
  localStorage.setItem('isComplete', true);
  localStorage.setItem('userData', JSON.stringify(graphData));

  var isComplete = localStorage.getItem('isComplete');
  var userData = JSON.parse(localStorage.getItem('userData'));

  console.log(isComplete);
  console.log(graphData);
  renderGraph();
}

function clear() {
  localStorage.clear();
}

document.getElementById('test').addEventListener('click', complete);
document.getElementById('clear').addEventListener('click', clear);