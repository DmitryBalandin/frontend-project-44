import readlineSync from 'readline-sync';
export default function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function game(answer, logicGame) {
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
