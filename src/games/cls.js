import readlineSync from 'readline-sync'

function game() {
  const name = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + name + '!')
};
export { game }
