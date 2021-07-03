const square = document.querySelectorAll('.square');
console.log(square);
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let hitPosition;
let result = 0;

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole');
  });
  // randomized div element
  let randomPosition = square[Math.floor(Math.random() * 9)]; 
  console.log(randomPosition);
  randomPosition.classList.add('mole');

  // assign the id of the randomPosition to hitPosition to use later
  hitPosition = randomPosition.id;
}

square.forEach(div => {
  div.addEventListener('mouseup', () => {
    if(div.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}
//moveMole();
