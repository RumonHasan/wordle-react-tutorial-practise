import React,{useContext} from 'react';
import { WorldContext } from '../App';

const Key = ({keyVal, bigKey, keyIndex}) => {
  const {onSelectLetter, onEnter, onDeleteLetter} = useContext(WorldContext);

  //letter select
  const selectLetter = ()=>{
    if(keyVal === 'ENTER'){
      onEnter();
    }
    else if(keyVal === 'BACKSPACE'){
      onDeleteLetter();
    }
    else{ 
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className='key' key={keyIndex} id={bigKey && 'big'}
    onClick={selectLetter}>{keyVal}</div>
  )
};

export default Key;
