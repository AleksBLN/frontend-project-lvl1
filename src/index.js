import readlineSync from 'readline-sync';

export default () => {
  const whatToDo = '\nAnswer "yes" if number even otherwise answer "no".';
  console.log(`Welcome to the Brain Games! ${whatToDo}`);
  const greeting = () => {
    const userName = readlineSync.question('May i have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
  };
  const userName = greeting();
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const isEven = num => num % 2 === 0;
  const iter = (counter, acc) => {
    const number = getRandomInt(-100, 100);
    console.log(`Question: ${number}`);
    const askQuestion = () => readlineSync.question('Is this number even? ');
    const inputAnswer = askQuestion();
    const rightAnswer = isEven(number) ? 'yes' : 'no';
    const correct = (rightAnswer === inputAnswer);
    if (correct && counter < 3) {
      if (counter === 2) {
        return console.log(`Congratulations, ${userName}`);
      }
      console.log('Correct!');
      return iter(counter + 1, acc);
    }
    return console.log(`"${inputAnswer}" is wrong answer. Correct answer was "${rightAnswer}". Let's try again, ${userName}!`);
  };
  return iter(0, 3);
};
