import getRandomInt from "../helpers/helpers.js";

function isEven(num) {
    return num % 2 === 0;
}

export default function createLogicIsEven() {
    const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';
    const getResultAndQuestionGame = () => {
        let number = getRandomInt(1, 100);
        const rightAnswer = isEven(number) ? 'yes' : 'no';
        const question = number;
        return { rightAnswer, question };
    }
    return { exercise, getResultAndQuestionGame };
}
