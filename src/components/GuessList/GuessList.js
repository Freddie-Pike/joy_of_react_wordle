import React from 'react';
import Guess from '../Guess'
import EmptyGuessRow from '../EmptyGuessRow/EmptyGuessRow';
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'
import { answer } from '../Game/Game';

function GuessList({ guesses, remainingGuesses }) {
  return (
    <div>
      {guesses.map((guess) => {
        const checkedGuess = checkGuess(guess, answer);
        return (
          <Guess key={crypto.randomUUID()} guess={checkedGuess} / >
        )
      })}
      {range(0, remainingGuesses).map(() => <EmptyGuessRow key={crypto.randomUUID()} />)}
    </div>

  )
}

export default GuessList;