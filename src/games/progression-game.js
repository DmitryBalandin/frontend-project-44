import getRandomInt from "../assets/assets.js";

export default function createLogicGameProgression() {
    const numberFirst = getRandomInt(1, 20);
    const progression = getRandomInt(1, 9);
    const indexChange = getRandomInt(0,9);
    const arrProgression = [];
    for (let i = 0; i < 10; i +=1) {
        arrProgression.push(numberFirst + (i * progression));
    }
    const rightAnswer = arrProgression[indexChange];
    arrProgression[indexChange] = '..'
    const question = arrProgression.join(' ');
    return { rightAnswer, question }
}

