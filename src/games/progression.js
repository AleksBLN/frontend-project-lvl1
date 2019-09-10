import { cons } from '@hexlet/pairs';
import engine from '..';
import getRandomInt from '../common';

const gameTask = 'What number is missing in the progression?';
const length = 10;
const getQuestion = (start, step, hiddenElementPosition, progressionLength) => {
  const iter = (counter, progressionMember, progression) => {
    const addMember = (counter === hiddenElementPosition) ? '..' : `${progressionMember}`;
    if (counter - 1 === progressionLength) {
      return progression;
    }
    if (counter === 1) {
      return iter(counter + 1, progressionMember + step, addMember);
    }
    return iter(counter + 1, progressionMember + step, `${progression} ${addMember}`);
  };
  return iter(1, start, '');
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
