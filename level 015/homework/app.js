let score = 0;
let min = 1;
let max = 2;
let randomNumber = generateRandomNumber(min, max);

function saveName() {
  const nameInput = document.getElementById('username').value;
  if (nameInput) {
    localStorage.setItem('username', nameInput);
    document.getElementById('display-name').textContent = nameInput;
    document.getElementById('name-section').classList.add('hidden');
    document.getElementById('game-section').style.display = 'block';
  } else {
    alert('Please enter your name!');
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeBackgroundColor() {
  const color = document.getElementById('color-picker').value;
  document.body.style.backgroundColor = color;
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value, 10);
  if (guess === randomNumber) {
    score++;
    alert('Correct! Your score has increased.');
    increaseDifficulty();
  } else {
    alert('Wrong! Try again.');
  }
  document.getElementById('score').textContent = score;
}

function increaseDifficulty() {
  max *= 2;
  randomNumber = generateRandomNumber(min, max);
  document.getElementById('range').textContent = `${min} - ${max}`;
}

window.onload = () => {
  const storedName = localStorage.getItem('username');
  if (storedName) {
    document.getElementById('display-name').textContent = storedName;
    document.getElementById('name-section').classList.add('hidden');
    document.getElementById('game-section').style.display = 'block';
  }
};
