#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const generateNum = () => (Math.floor(Math.random() * 100));
  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    const num = generateNum();
    const rightAnswer = (num % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const responce = readlineSync.question('Your answer: ');
    if (rightAnswer === responce) {
      countRightAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${responce}' is wrong answer ;( Correct answer is '${rightAnswer}'`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

isEvenGame();

export default isEvenGame;
