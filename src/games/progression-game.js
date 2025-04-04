import getRandomInt from '../helpers/helpers.js'

function createProgression(maxFirst = 20, maxDifference = 9) {
  const numberFirst = getRandomInt(1, maxFirst)
  const difference = getRandomInt(1, maxDifference)
  const progression = []
  for (let i = 0; i < 10; i += 1) {
    progression.push(numberFirst + (i * difference))
  }
  return progression
}

export default function createLogicGameProgression() {
  const exercise = 'What number is missing in the progression?'
  const getResultAndQuestionGame = () => {
    const indexChange = getRandomInt(0, 9)
    const progression = createProgression()
    const rightAnswer = progression[indexChange]
    progression[indexChange] = '..'
    const question = progression.join(' ')
    return { rightAnswer, question }
  }
  return { exercise, getResultAndQuestionGame }
};
