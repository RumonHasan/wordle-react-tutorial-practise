import React,{useContext} from 'react';
import { WorldContext } from '../App';

const Key = ({keyVal, bigKey, keyIndex}) => {
  const {board, setBoard, currAttempt, setCurrAttempt} = useContext(WorldContext);
  //letter select
  const selectLetter = ()=>{
    if(keyVal === 'ENTER'){
      if(currAttempt.letterPosition !== 5) return;
      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPosition: 0});
    }
    else if(keyVal === 'BACKSPACE'){
      if(currAttempt.letterPosition === 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPosition - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({...currAttempt, letterPosition: currAttempt.letterPosition - 1})
    }
    else{
      if(currAttempt.letterPosition > 4) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPosition] = keyVal; // populating the array for letters
      setBoard(newBoard);// reassigning the board with the letters on it
      setCurrAttempt({...currAttempt, letterPosition: currAttempt.letterPosition + 1});
    }
  };
  return (
    <div className='key' key={keyIndex} id={bigKey && 'big'}
    onClick={selectLetter}>{keyVal}</div>
  )
};

export default Key;
