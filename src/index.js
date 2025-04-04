import createLogicGameCalc from "./games/calc-games.js";
import createLogicIsEven from './games/even-games.js';
import createLogicGameGcd from './games/gcd-games.js';
import createLogicGameProgression from './games/progression-game.js';
import createLogicGameIsPrime from "./games/prime-games.js";
import { createGame } from './helpers/helpers.js';


export const startGameIsEven = createGame(createLogicIsEven);
export const startGameCalc = createGame(createLogicGameCalc);
export const startGameGcd = createGame(createLogicGameGcd);
export const startGameProgressional = createGame(createLogicGameProgression);
export const startGameIsPrime = createGame(createLogicGameIsPrime);