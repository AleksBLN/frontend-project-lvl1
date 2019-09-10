import { cons } from '@hexlet/pairs';
import engine from '..';
import getRandomInt from '../common';

const gameTask = 'What is the result of the expression?';
const operations = '+-*';
const getData = () => {
  const first = getRandomInt(1, 50);
  const second = getRandomInt(1, 10);
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const getResult = (sign) => {
    switch (sign) {
      case '-': {
        return first - second;
      }
      case '+': {
        return first + second;
      }
      case '*': {
        return first * second;
      }
      default:
    }
    return undefined;
  };
  const gameQuestion = `${first} ${operation} ${second}`;
  const rightAnswer = getResult(operation).toString();
  return cons(gameQuestion, rightAnswer);
};

export default () => engine(gameTask, getData);
