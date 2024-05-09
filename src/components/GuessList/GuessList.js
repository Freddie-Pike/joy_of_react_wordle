import React from 'react';
import Guess from '../Guess'
import EmptyGuessRow from '../EmptyGuessRow/EmptyGuessRow';
import { range } from '../../utils'

function GuessList({guesses, remainingGuesses}) {
  console.log(`guesses: ${guesses}`);
  return (
      <div>
        {guesses.map((guess) => <Guess key={crypto.randomUUID()}>{guess}</Guess>)}
        {range(0, remainingGuesses).map(() => <EmptyGuessRow key={crypto.randomUUID()} />)}
      </div>
      
  )
}

export default GuessList;