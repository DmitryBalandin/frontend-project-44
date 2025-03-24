import readlineSync from 'readline-sync';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomIActions() {
    const actions = {
        1: '+',
        2: '-',
        3: '*',
    };
    return actions[getRandomInt(1, 4)];
}

function getResultOfFunction(num1, num2, actions) {
    const objActions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
    }
    const result = objActions[actions](num1,num2);
    return result
}

function game() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    console.log('What is the result of the expression?')
    let amountRightAnswer = 0;
    while (amountRightAnswer < 3) {
        const numberOne = getRandomInt(1, 20);
        const numberTwo = getRandomInt(1, 20);
        const actions = getRandomIActions();
        const rightAnswer = getResultOfFunction(numberOne, numberTwo, actions);
        console.log("Question: " + numberOne + " " + actions + " " + numberTwo);
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

export { game };