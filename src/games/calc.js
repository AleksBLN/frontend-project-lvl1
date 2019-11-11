import { cons } from '@hexlet/pairs';
import engine from '..';
import getRandomInt from '../common';

const gameTask = 'What is the result of the expression?';
const operations = '+-*';
const getResult = (sign, firstOperand, secondOperand) => {
  switch (sign) {
    case '-': {
      return firstOperand - secondOperand;
    }
    case '+': {
      return firstOperand + secondOperand;
    }
    case '*': {
      return firstOperand * secondOperand;
    }
    default:
  }
  return false;
};
const getData = () => {
  const first = getRandomInt(1, 50);
  const second = getRandomInt(1, 10);
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const gameQuestion = `${first} ${operation} ${second}`;
  const rightAnswer = getResult(operation, first, second).toString();
  return cons(gameQuestion, rightAnswer);
};

export default () => engine(gameTask, getData);
