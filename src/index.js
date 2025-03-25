import createLogicGameCalc from "./games/even-calc.js";
import createLogicIsEven from './games/even-games.js';
import createLogicGameGsd from './games/gcd-games.js';
import createLogicGameProgression from './games/progression-game.js';
import createLogicGameIsPrime from "./games/prime-game.js";
import { game } from './assets/assets.js';


export const gameIsEven = game('Answer "yes" if the number is even, otherwise answer "no".', createLogicIsEven);
export const gameCalc = game('What is the result of the expression?', createLogicGameCalc);
export const gameGsd = game('Find the greatest common divisor of given numbers.', createLogicGameGsd);
export const gameProgressional = game('What number is missing in the progression?', createLogicGameProgression);
export const gameIsPrime = game('Answer "yes" if given number is prime. Otherwise answer "no".',createLogicGameIsPrime);