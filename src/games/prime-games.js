import getRandomInt from '../helpers/helpers.js';

function isPrime(number) {
  for (let i = 2, j = Math.sqrt(number); i <= j; i += 1) {
    if (number % i === 0) return false;
  };
  return true;
};

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
