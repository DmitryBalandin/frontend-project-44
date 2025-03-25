import getRandomInt from "../assets/assets.js";

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
    const result = objActions[actions](num1, num2);
    return result
}

export default function createLogicGameCalc() {
    const numberOne = getRandomInt(1, 20);
    const numberTwo = getRandomInt(1, 10);
    const actions = getRandomIActions();
    const rightAnswer = getResultOfFunction(numberOne, numberTwo, actions);
    const question = `${numberOne + " " + actions + " " + numberTwo}`
    return { rightAnswer, question }
}



