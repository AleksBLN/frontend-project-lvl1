import { cons } from '@hexlet/pairs';
import engine from '..';
import { getRandomInt } from '../common';

const gameTask = 'What number is missing in the progression?';
const length = 10;
const getQuestion = (start, step, hiddenElement) => {
  const iter = (counter, progressionMember, progression) => {
    if (counter - 1 === length) {
      return progression;
    }
    if (counter === 1) {
      if (hiddenElement === 1) {
        return iter(counter + 1, progressionMember + step, '..');
      }
      return iter(counter + 1, progressionMember + step, `${progressionMember}`);
    } if (counter === hiddenElement) {
      return iter(counter + 1, progressionMember + step, `${progression} ..`);
    }
    return iter(counter + 1, progressionMember + step, `${progression} ${progressionMember}`);
  };
  return iter(1, start, '');
};

const getData = () => {
  const start = getRandomInt(-100, 100);
  const step = getRandomInt(1, 60);
  const hiddenElement = getRandomInt(1, length);
  const gameQuestion = getQuestion(start, step, hiddenElement);
  const rightAnswer = (start + step * (hiddenElement - 1)).toString();
  return cons(gameQuestion, rightAnswer);
};
export default () => engine(gameTask, getData);
