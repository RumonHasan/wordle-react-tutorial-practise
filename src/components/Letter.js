import React,{useContext} from 'react';
import { WorldContext } from '../App';

const Letter = (props) => {
  const {letterPos, attemptVal} = props;
  const {board} = useContext(WorldContext);
  // getting the letter position and text from the board matrix and putting it into the array
  const letter = board[attemptVal][letterPos];
  return (
    <div className='letter'>
      {letter}
    </div>
  )
};

export default Letter;
