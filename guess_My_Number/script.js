'use strict';

let secretNumber = Math.trunc(Math.random() * 20)+1;
let score=20;
let highScore =0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);
if (!guess)
{
    displayMessage('⛔ Please enter a guess!');
}
else if(guess===secretNumber && score>0)
{
    displayMessage('Correct number!');
    if(score>highScore)
    {
        highScore =score;
        document.querySelector('.highscore').textContent = highScore;    
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width='30rem';
}
else if(guess>secretNumber  && score>0)
{
    displayMessage('Too High!');
    score--;
    document.querySelector('.score').textContent =score;
}
else if(guess<secretNumber  && score>0)
{
    displayMessage('Too Low!');
    score--;
    document.querySelector('.score').textContent =score;
}
else
{
    displayMessage('Game Over!');
}
});

document.querySelector('.again').addEventListener('click', function () {

    score=20;
    secretNumber = Math.trunc(Math.random() * 20)+1;

    displayMessage('Start guessing...!');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});