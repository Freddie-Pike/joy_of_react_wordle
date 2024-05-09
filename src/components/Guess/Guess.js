import React from 'react';

function Guess({ children }) {
  const guessChars = [...children]
  return <p className="guess">{guessChars.map(item => <span key={crypto.randomUUID()} className="cell">{item}</span>)}</p>;
}

export default Guess;
