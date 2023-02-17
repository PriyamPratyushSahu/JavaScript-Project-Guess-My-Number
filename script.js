'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = secretNumber;
let flag = false;
let guessValue;

console.log(`Secret Number: ${secretNumber}`);

const getValue = function () {
    //String to number
    guessValue = Number(document.querySelector('.guess').value);
    console.log(guessValue);
    //console.log(typeof guessValue); 

    //If score value is positive
    if (scoreValue > 1) {
        //Condition 1: Guess value is not null
        if (!guessValue) {
            console.log("No number");
            document.querySelector('.message').textContent = 'No number😒';
        }
        //Condition 2: Guess value is in given range
        else if (guessValue < 1 || guessValue > 20) {
            console.log("Out of Range!");
            document.querySelector('.message').textContent = 'Out of Range 😑';
        }
        //Condition 3: Guess value exceeds score value   
        else if (guessValue > scoreValue) {
            console.log("Too High");
            document.querySelector('.message').textContent = 'Too High! 😲';
        }
        //Condition 4: Guess value less then score value
        else if (guessValue < scoreValue) {
            console.log("Too Low");
            document.querySelector('.message').textContent = 'Too Low 😪';
        }
        //Condition 5: Guess value matches!
        else if (guessValue === scoreValue) {
            flag = true;
            console.log("Won");
            document.querySelector('.message').textContent = 'Congratulations🤩🥳';
            document.querySelector('.number').textContent = guessValue;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            
        }
        scoreValue = (flag && scoreValue > 0) ? scoreValue : --scoreValue;
        document.querySelector('.score').textContent = scoreValue
        
    }
    else {
        console.log("You Lose");
        document.querySelector('.message').textContent = 'You lose☹️';
        document.querySelector('.score').textContent = 0
    }
    
}
document.querySelector('.check').addEventListener('click', getValue);


