import { cons } from '@hexlet/pairs';
import engine from '..';
import getRandomInt from '../common';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const getData = () => {
  const gameQuestion = getRandomInt(-100, 100);
  const rightAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => engine(gameTask, getData);
