import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessingInput from '../GuessingInput/GuessingInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [remainingGuesses, setRemainingGuesses] = React.useState(NUM_OF_GUESSES_ALLOWED - guesses.length)

  const updateGuesses = (newGuess) => {
    const newGuesses = [...guesses];
    const updatedRemainingGuesses = NUM_OF_GUESSES_ALLOWED - newGuesses.length

    newGuesses.push(newGuess);
    setGuesses(newGuesses);
    setRemainingGuesses(updatedRemainingGuesses);
  }

  return <div className="game-wrapper">
    <GuessList guesses={guesses} remainingGuesses={remainingGuesses} />
    <GuessingInput updateGuesses={updateGuesses} />
  </div>;
}

export default Game;
