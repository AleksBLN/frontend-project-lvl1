import { cons } from '@hexlet/pairs';
import gear from '..';

const rule = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};
const getData = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const firstNum = getRandomInt(-100, 100);
  const secondNum = getRandomInt(-100, 100);
  const gameQuestion = `${firstNum} ${secondNum}`;
  const rightAnswer = `${gcd(firstNum, secondNum)}`;
  return cons(gameQuestion, rightAnswer);
};
export default () => gear(rule, getData);
