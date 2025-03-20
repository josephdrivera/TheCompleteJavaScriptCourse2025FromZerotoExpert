'use strict';
// Game variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score variables
let score = 20;
let highscore = 0;

// Selecting elements
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Display secret number
  //document.querySelector('.number').textContent = secretNumber;
  // Update score
  document.querySelector('.score').textContent = score;
  // Update highscore
  document.querySelector('.highscore').textContent = highscore;

  // Check if guess is correct
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  // Check if guess is too high
  if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    if (score <= 0) {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
    // Update score
    document.querySelector('.score').textContent = score;
    // Check if guess is too low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';  
    score--;
    if (score <= 0) {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
    // Update score
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    // Change background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Change number width
    document.querySelector('.number').style.width = '30rem';
    // Display secret number
    document.querySelector('.number').textContent = secretNumber;
    // Update highscore
    if (score > highscore) {
      // Update highscore
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Reset game
  document.querySelector('.again').addEventListener('click', function () {
    // Reset score
    score = 20;
    // Reset message
    document.querySelector('.message').textContent = 'Start guessing...';
    // Reset score
    document.querySelector('.score').textContent = score;
    // Reset secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // Reset number
    document.querySelector('.number').textContent = '?';
    // Reset background color
    document.querySelector('body').style.backgroundColor = '#222';
    // Reset number width
    document.querySelector('.number').style.width = '15rem';
  });
});




