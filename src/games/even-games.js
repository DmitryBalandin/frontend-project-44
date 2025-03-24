
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function isEven(num) {
    return num % 2 === 0;
}

export default function createLogicIsEven(){
    let number = getRandomInt(1, 100);
    const rightAnswer = isEven(number) ? 'yes' : 'no';
    const question = number;
    return  { rightAnswer, question }
}
