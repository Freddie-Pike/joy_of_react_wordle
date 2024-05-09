import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessingInput from '../GuessingInput/GuessingInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return <GuessingInput />;
}

export default Game;
