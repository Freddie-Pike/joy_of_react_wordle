import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessingInput from '../GuessingInput/GuessingInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const updateGuesses = (newGuess) => {
    const newGuesses = [...guesses];
    newGuesses.push(newGuess);
    setGuesses(newGuesses);
  }

  return <div className="game-wrapper">
    <GuessList guesses={guesses}/>
    <GuessingInput updateGuesses={updateGuesses}/>
  </div>;
}

export default Game;
