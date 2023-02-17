'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let flag = false;
let guessValue;
let highscore = 0;

console.log(`Secret Number: ${secretNumber}`);

const setQuerySelectorValue = (id,value) => {
    document.querySelector(id).textContent = value;
}
const setBackgroundColor = (value) => {
    document.querySelector('body').style.backgroundColor = value;
}

const againButton = () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    scoreValue = 20;
    flag = false;

    document.querySelector('.guess').value = ''; //textContent does not works use value

    setQuerySelectorValue('.message','Start guessing😁...');
    setQuerySelectorValue('.score', scoreValue);
    setQuerySelectorValue('.number','?');

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    console.clear();
    console.log(`Secret Number: ${secretNumber}`);
}

const checkCondition = (numValue) => {

    //Condition 3: Guess value is in given range
    if (numValue < 1 || numValue > 20) {
        console.log("Out of Range!");
        setQuerySelectorValue('.message','Out of Range 😑');
        setBackgroundColor('#a017d2');
    }
        
    else if (numValue != secretNumber) {
        if (scoreValue > 1) {
            //Condition 4: Guess value exceeds score value OR Guess value less then score value
            setQuerySelectorValue('.message', (numValue < secretNumber) ? 'Too Low 😪' : 'Too High! 😲');
        }
        else {
            console.log("You Lose");
            setQuerySelectorValue('.message','You lose☹️')
            setBackgroundColor('#df3535');
            scoreValue = 1; // To fix the output as 0 because of --scoreValue
            setQuerySelectorValue('.number','❌');
            console.log("Check");
        }   
    }
    //Condition 6: Guess value matches!
    else if (numValue === secretNumber) {
        flag = true;
        console.log("Won");
        setQuerySelectorValue('.message', 'Congratulations🤩🥳')
        setQuerySelectorValue('.number',numValue);
        setBackgroundColor('#60b347');
        document.querySelector('.number').style.width = '30rem';
        highscore = (scoreValue > highscore) ? scoreValue : highscore;
        setQuerySelectorValue('.highscore',highscore);
    }
}

const getValue = () => {

    setBackgroundColor('#222');

    //String to number
    guessValue = Number(document.querySelector('.guess').value);
    console.log(guessValue);

    //If score value is positive
    //Condition 1: Guess value is not null
    if (!guessValue) {
        console.log("No number");
        setQuerySelectorValue('.message', 'No number😒');
        setBackgroundColor('#4c49ec');   
    }
    //Condition 2: Guess value is decimal
    else if (!Number.isInteger(guessValue)) {
        console.log("Not a integer value");
        setQuerySelectorValue('.message', 'Decimal not allowed🥸')
        //setQuerySelectorValue('.message', 'Decimal input not allowed');
        setBackgroundColor('#626464');
        setTimeout(againButton,3000);
    }
    else {
        checkCondition(guessValue)
    }        
    scoreValue = (flag && scoreValue > 0) ? scoreValue : --scoreValue;
    setQuerySelectorValue('.score', scoreValue);
    }


document.querySelector('.check').addEventListener('click', getValue);
document.querySelector('.again').addEventListener('click', againButton);


