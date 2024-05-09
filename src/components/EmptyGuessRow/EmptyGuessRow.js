import React from 'react';

// Instructions denote to use a the Guess component, but I liked splitting this out in a separate componet for clarity.
function EmptyGuessRow() {
  return (
    <p class="guess">
      <span class="cell"></span>
      <span class="cell"></span>
      <span class="cell"></span>
      <span class="cell"></span>
      <span class="cell"></span>
    </p>
  );
}

export default EmptyGuessRow;
