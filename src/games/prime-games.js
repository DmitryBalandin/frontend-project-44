import getRandomInt from "../helpers/helpers.js"

function isPrime(number) {
    const arrPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    return arrPrime.includes(number);
}


export default function createLogicGameIsPrime() {
    const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const getResultAndQuestionGame = () => {
        const number = getRandomInt(1, 100);
        const question = `${number}`;
        const rightAnswer = isPrime(number) ? 'yes' : 'no';
        return { rightAnswer, question };
    };
    return { exercise, getResultAndQuestionGame };
};