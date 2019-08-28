import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const engine = (gameTask, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  const iter = (counter) => {
    const gameData = getGameData();
    const gameQuestion = car(gameData);
    console.log(`Question: ${gameQuestion}`);
    const inputAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(gameData);
    const amountAttempts = 3;
    if (rightAnswer === inputAnswer && counter <= amountAttempts) {
      if (counter === amountAttempts) {
        return console.log(`Congratulations, ${userName}`);
      }
      console.log('Correct!');
      return iter(counter + 1);
    }
    console.log(`"${inputAnswer}" is wrong answer. Correct answer was "${rightAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  };
  return iter(1);
};
export default engine;
