import React,{useContext} from 'react';
import { WorldContext } from '../App';

const Key = ({keyVal, bigKey, keyIndex}) => {
  const {board, setBoard, currAttempt, setCurrAttempt} = useContext(WorldContext);
  //letter select
  const selectLetter = ()=>{
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition] = keyVal; // populating the array for letters
    setBoard(newBoard);// reassigning the board with the letters on it
    setCurrAttempt({...currAttempt, letterPosition: currAttempt.letterPosition + 1});
  };
  return (
    <div className='key' key={keyIndex} id={bigKey && 'big'}
    onClick={selectLetter}>{keyVal}</div>
  )
};

export default Key;
