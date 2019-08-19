import { cons, car, cdr } from '@hexlet/pairs';
import engine from '..';
import { getRandomInt } from '../common';

const gameTask = 'What is the result of the expression?';
const operationList = '+-*';
const getData = () => {
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 10);
  const operation = operationList[getRandomInt(0, operationList.length - 1)];
  const getResult = (sign) => {
    switch (sign) {
      case '-': {
        return firstNumber - secondNumber;
      }
      case '+': {
        return firstNumber + secondNumber;
      }
      case '*': {
        return firstNumber * secondNumber;
      }
      default:
    };
  };
  const gameQuestion = `${firstNumber} ${operation} ${secondNumber}`;
  const rightAnswer = `${getResult(operation)}`;
  return cons(gameQuestion, rightAnswer);
};

export default () => engine(gameTask, getData);
