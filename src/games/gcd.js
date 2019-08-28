import { cons } from '@hexlet/pairs';
import engine from '..';
import { getRandomInt } from '../common';

const gameTask = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => (b ? getGcd(b, a % b) : Math.abs(a));

const getData = () => {
  const firstOperand = getRandomInt(-100, 100);
  const secondOperand = getRandomInt(-100, 100);
  const gameQuestion = `${firstOperand} ${secondOperand}`;
  const rightAnswer = getGcd(firstOperand, secondOperand).toString();
  return cons(gameQuestion, rightAnswer);
};
export default () => engine(gameTask, getData);
