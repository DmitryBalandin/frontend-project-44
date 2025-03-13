import readlineSync from 'readline-sync';

function game() {
    const name = readlineSync.question('Your answer: ')
    console.log('Hello, ' + name + '!');
};
export { game };