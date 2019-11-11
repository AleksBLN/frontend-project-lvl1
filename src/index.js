import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const attemptsCount = 3;
const engine = (gameTask, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  const iter = (counter) => {
    if (counter > attemptsCount) {
      console.log(`Congratulations, ${userName}`);
      return false;
    }
    const gameData = getGameData();
    const gameQuestion = car(gameData);
    console.log(`Question: ${gameQuestion}`);
    const inputAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(gameData);
    if (rightAnswer === inputAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    console.log(`"${inputAnswer}" is wrong answer. Correct answer was "${rightAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  };
  return iter(1);
};
export default engine;
