import { cons } from '@hexlet/pairs';
import gear from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const gameQuestion = getRandomInt(-100, 100);
  const rightAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};
export default () => gear(rule, getData);
