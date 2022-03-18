import React,{useContext} from 'react';
import { WorldContext } from '../App';

const Letter = (props) => {
  const {letterPos, attemptVal} = props;
  const {board, correctWord, currAttempt} = useContext(WorldContext);
  // getting the letter position and text from the board matrix and putting it into the array
  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter; // checking the positioning of the word to the actual letter

  const almost = !correct && letter !== '' && correctWord.includes(letter);
  
  const letterState = currAttempt.attempt > attemptVal && (correct ? 'correct' : almost ? 'almost' : 'error'); // checking whether correct is true then seeing whether almost is true or not

  return (
    <div className='letter' id={letterState}>
      {letter}
    </div>
  )
};

export default Letter;
