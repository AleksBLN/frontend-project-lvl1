import { cons } from '@hexlet/pairs';
import engine from '..';
import { getRandomInt } from '../common';

const gameTask = 'What number is missing in the progression?';
const getProgression = (start, step, length, emptyStep) => {
  const iter = (counter, progMember, progStep, progression) => {
    if (counter === length) {
      return progression;
    } else if (counter + 1 === emptyStep) {
      return iter(counter + 1, progMember + progStep, progStep, `${progression} ..`);
    }
    return iter(counter + 1, progMember + progStep, progStep, `${progression} ${progMember}`);
  };
  return iter(1, start + step, step, start);
};
const getProgressionMember = (firstMember, progressionStep, numberOfMember) => firstMember + progressionStep * (numberOfMember - 1);
const getData = () => {
  const start = getRandomInt(-100, 100);
  const step = getRandomInt(1, 60);
  const emptyStep = getRandomInt(1, 10);
  const length = 10;
  const gameQuestion = getProgression(start, step, length, emptyStep);
  const rightAnswer = `${getProgressionMember(start, step, emptyStep)}`;
  return cons(gameQuestion, rightAnswer);
};
export default () => engine(gameTask, getData);
