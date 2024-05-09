import React from 'react';
import Guess from '../Guess'

function GuessList({guesses}) {
  console.log(`guesses: ${guesses}`);
  return (
    <div>{guesses.map((guess) => <Guess key={crypto.randomUUID()}>{guess}</Guess>)}</div>
  )
}

export default GuessList;