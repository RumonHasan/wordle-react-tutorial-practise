import React, {useCallback, useEffect, useContext} from 'react'
import Key from './Key';
import { WorldContext } from '../App';

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // global context
  const {onEnter, onDeleteLetter, onSelectLetter, disabledLetters} = useContext(WorldContext);

  // handle keys
  const handleKeyboard = useCallback((event)=>{
    if(event.key === 'Enter'){
      onEnter();
    }else if(event.key === 'Backspace'){
      onDeleteLetter();
    }else{
      // selecting letter
      keys1.forEach((key)=>{
        if(event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      });
      keys2.forEach((key)=>{
        if(event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      })
      keys3.forEach((key)=>{
        if(event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      })
    }
  })

  useEffect(()=>{
    document.addEventListener('keydown', handleKeyboard);
    return (()=>{
      document.removeEventListener('keydown', handleKeyboard);
    })
  },[handleKeyboard])

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className='line1'>
        {keys1.map((key, index)=>{
          return (
             <div key={index}>
                <Key keyVal={key} keyIndex={index} disabled={disabledLetters.includes(key)}/>
              </div>
          )
        })}
      </div>
      <div className='line2'>
        {keys2.map((key, index)=>{
            return (
              <div key={index}>
                <Key keyVal={key} keyIndex={index} disabled={disabledLetters.includes(key)}/>
              </div>
            )
          })}
      </div>
      <div className='line3'>
      <Key keyVal={'ENTER'} bigKey/>
      {keys3.map((key, index)=>{
          return (
            <div key={index}>
                <Key keyVal={key} keyIndex={index} disabled={disabledLetters.includes(key)}/>
              </div>
          )
        })}
      <Key keyVal={'BACKSPACE'} bigKey/>
      </div>
    </div>
  )
};

export default Keyboard;
