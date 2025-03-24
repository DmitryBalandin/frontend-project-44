import readlineSync from 'readline-sync';
import createLogicGameCalc from "./games/even-calc.js";
import createLogicIsEven from './games/even-games.js';

function game(answer, logicGame) {
    return function(){
        console.log('Welcome to the Brain Games!');
        const name = readlineSync.question('May I have your name? ');
        console.log('Hello, ' + name + '!');
        console.log(answer)
        let amountRightAnswer = 0;
        while (amountRightAnswer < 3) {
            const { rightAnswer, question } = logicGame();
            console.log("Question: " + question);
            const answer = readlineSync.question('Your answer: ');
            if (answer != rightAnswer) {
                console.log(answer + " is wrong answer ;(. Correct answer was " + rightAnswer + ".");
                console.log("'Let's try again, " + name + "!");
                return;
            }
            console.log("Correct!");
            amountRightAnswer += 1;
        }
        console.log('Congratulations,' + name);
    }
   
}

export const gameIsEven = game('Answer "yes" if the number is even, otherwise answer "no".', createLogicIsEven);
export const gameCalc = game('What is the result of the expression?', createLogicGameCalc);