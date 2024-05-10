import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessingInput from '../GuessingInput/GuessingInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [remainingGuesses, setRemainingGuesses] = React.useState(NUM_OF_GUESSES_ALLOWED - guesses.length)
  const [hasWon, setHasWon] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);

  const updateGuesses = (newGuess) => {
    if (newGuess === answer) {
      setHasWon(true);
      return
    }

    const newGuesses = [...guesses];
    const updatedRemainingGuesses = NUM_OF_GUESSES_ALLOWED - (newGuesses.length + 1)
    if (updatedRemainingGuesses < 0) {
      setHasLost(true);
      return
    }

    newGuesses.push(newGuess);
    setGuesses(newGuesses);
    setRemainingGuesses(updatedRemainingGuesses);
  }

  return <div className="game-wrapper">
    <GuessList guesses={guesses} remainingGuesses={remainingGuesses} />
    <GuessingInput updateGuesses={updateGuesses} />
    {hasWon && <WinBanner numOfGuesses={guesses.length}/>}
    {hasLost && <LoseBanner answer={answer}/>}
  </div>;
}

export default Game;
