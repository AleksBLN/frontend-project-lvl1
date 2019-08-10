import { cons, car, cdr } from '@hexlet/pairs';
import gear from '..';

const rule = 'What is the result of the expression?';
const getData = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const firstNum = getRandomInt(1, 50);
  const secondNum = getRandomInt(1, 10);
  const randomOperation = (num) => {
    switch (num) {
      case 0: {
        const questionPlus = `${firstNum} + ${secondNum}`;
        const answerPlus = firstNum + secondNum;
        return cons(questionPlus, answerPlus);
      }
      case 1: {
        const questionMinus = `${firstNum} - ${secondNum}`;
        const answerMinus = firstNum - secondNum;
        return cons(questionMinus, answerMinus);
      }
      case 2: {
        const questionMultiply = `${firstNum} * ${secondNum}`;
        const answerMultiply = firstNum * secondNum;
        return cons(questionMultiply, answerMultiply);
      }
      default:
    }
  };
  const operation = randomOperation(getRandomInt(0, 3));
  const gameQuestion = car(operation);
  const rightAnswer = `${cdr(operation)}`;
  return cons(gameQuestion, rightAnswer);
};

export default () => gear(rule, getData);
