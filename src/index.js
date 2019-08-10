import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gear = (rule, data) => {
  console.log(`Welcome to the Brain Games! \n${rule}`);
  const greeting = () => {
    const userName = readlineSync.question('May i have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
  };
  const userName = greeting();
  const iter = (counter, acc) => {
    const gameData = data();
    const gameQuestion = car(gameData);
    console.log(`Question: ${gameQuestion}`);
    const getAnswer = () => readlineSync.question('Your answer ');
    const inputAnswer = getAnswer();
    const rightAnswer = cdr(gameData);
    const correct = (rightAnswer === inputAnswer);
    if (correct && counter < 3) {
      if (counter === 2) {
        return console.log(`Congratulations, ${userName}`);
      }
      console.log('Correct!');
      return iter(counter + 1, acc);
    }
    return console.log(`"${inputAnswer}" is wrong answer. Correct answer was "${rightAnswer}". Let's try again, ${userName}!`);
  };
  return iter(0, 3);
};
export default gear;
