import React from 'react';

function WinBanner({ numOfGuesses }) {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in 
        <strong> {numOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}

export default WinBanner;
