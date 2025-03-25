import getRandomInt from "../assets/assets.js";


function gcd(num1, num2) {
    let devider = num1 <= num2 ? num1 : num2;
    while (true) {
        if (devider < 2) return 1;
        if (num1 % devider === 0 && num2 % devider === 0) return devider;
        devider -= 1;
    }
}

export default function createLogicGameGsd() {
    let number1 = getRandomInt(1, 100);
    let number2 = getRandomInt(1, 100);
    const rightAnswer = gcd(number1,number2);
    const question = `${number1} ${number2}`;
    return { rightAnswer, question }
}

