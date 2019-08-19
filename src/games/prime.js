import { cons } from '@hexlet/pairs';
import engine from '..';
import { getRandomInt } from '../common';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  const iter = (counter, number) => {
    if (counter === Math.abs(number)) {
      return true;
    }
    return ((num % counter === 0) ? false : iter(counter + 1, number));
  };
  return iter(2, num);
};
const getData = () => {
  const gameQuestion = getRandomInt(-100, 100);
  const rightAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};
export default () => engine(gameTask, getData);
