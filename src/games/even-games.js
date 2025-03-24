import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function isEven(num) {
    return num % 2 === 0;
}

function game() {
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let amountRightAnswer = 0;
    while (amountRightAnswer < 3) {
        let number = getRandomInt(1, 100);
        console.log("Question: " + number);
        const answer = readlineSync.question('Your answer: ');
        const rightAnswer = isEven(number) ? 'yes' : 'no';
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


export { game };