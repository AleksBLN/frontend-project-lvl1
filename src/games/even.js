import { cons } from '@hexlet/pairs';
import gear from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const getData = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const gameQuestion = getRandomInt(-100, 100);
  const isEven = num => num % 2 === 0;
  const rightAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => gear(rule, getData);
