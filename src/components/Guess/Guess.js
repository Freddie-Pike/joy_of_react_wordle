import React from 'react';

function Guess({children}) {
  const guessChars = [...children]
  console.log(`guessChars: ${guessChars}`);
  return <p className="guess">{guessChars.map(item => <span className="cell">{item}</span>)}</p>;
}

export default Guess;
