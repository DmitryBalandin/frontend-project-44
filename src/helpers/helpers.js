import readlineSync from 'readline-sync';
export default function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + min);
}

export function createGame(logicGame) {
  return function () {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    const { exercise, getResultAndQuestionGame } = logicGame();
    console.log(exercise);
    for (let i = 0; i < 3; i += 1) {
      const { rightAnswer, question } = getResultAndQuestionGame();
      console.log(`Question: ${question}`);
      const yourAnswer = readlineSync.question('Your answer: ');
      if (yourAnswer != rightAnswer) {
        console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
  };
}
