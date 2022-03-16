import React,{useContext} from 'react';
import { WorldContext } from '../App';

const Letter = (props) => {
  const {letterPosition, attemptValue} = props;
  const {board} = useContext(WorldContext);
  // getting the letter position and text from the board matrix and putting it into the array
  const letter = board[attemptValue][letterPosition];
  return (
    <div className='letter'>
      {letter}
    </div>
  )
};

export default Letter;
