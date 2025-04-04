import getRandomInt from "../helpers/helpers.js";

function getRandomAction() {
    const actions = ['+', '-', '*'];
    return actions[getRandomInt(0, 3)];
}

function getResultOfFunction(num1, num2, action) {
    const objActions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
    }
    const result = objActions[action](num1, num2);
    return result;
}

export default function createLogicGameCalc() {
    const exercise = 'What is the result of the expression?';
    const getResultAndQuestionGame = () => {
        const numberOne = getRandomInt(1, 20);
        const numberTwo = getRandomInt(1, 10);
        const action = getRandomAction();
        const rightAnswer = getResultOfFunction(numberOne, numberTwo, action);
        const question = `${numberOne} ${action} ${numberTwo}`;
        return { rightAnswer, question }
    }
    return { exercise, getResultAndQuestionGame }
}



