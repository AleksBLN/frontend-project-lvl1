import { cons } from '@hexlet/pairs';
import engine from '..';
import getRandomInt from '../common';

const gameTask = 'What number is missing in the progression?';
const length = 10;
const getQuestion = (start, step, hiddenElementPosition, progressionLength) => {
  const iter = (counter, progression) => {
    if (counter === progressionLength) {
      return progression;
    }
    const progressionMember = start + step * counter;
    const newMember = (counter === hiddenElementPosition - 1) ? '..' : `${progressionMember}`;
    if (counter === 0) {
      return iter(counter + 1, newMember);
    }
    return iter(counter + 1, `${progression} ${newMember}`);
  };
  return iter(0, '');
};

const getData = () => {
  const start = getRandomInt(-100, 100);
  const step = getRandomInt(1, 60);
  const hiddenElementPosition = getRandomInt(1, length);
  const gameQuestion = getQuestion(start, step, hiddenElementPosition, length);
  const rightAnswer = (start + step * (hiddenElementPosition - 1)).toString();
  return cons(gameQuestion, rightAnswer);
};
export default () => engine(gameTask, getData);
