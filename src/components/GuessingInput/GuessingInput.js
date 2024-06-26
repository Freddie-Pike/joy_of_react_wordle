import React from 'react';

function GuessingInput({updateGuesses}) {
  const [guess, setGuess] = React.useState('')

  return <form className="guess-input-wrapper" onSubmit={(event) => {
    event.preventDefault();
    
    setGuess('')
    updateGuesses(guess)
  }}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guess} pattern="\w{5}" required onChange={(event) => {
      setGuess(event.target.value.toUpperCase());
      
    }} />
  </form>;
}

export default GuessingInput;
