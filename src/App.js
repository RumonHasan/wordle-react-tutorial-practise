import React,{useState, createContext} from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './Style.css';
import { defaultBoard } from './Words';

export const WorldContext = createContext();

const App = () => {
  // primary states for the game
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPosition: 0});

  // sample word
  const correctWord = 'RUMON';

  // keyboard selection functions
  const onSelectLetter = (keyVal)=>{
    if(currAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition] = keyVal; // populating the array for letters
    setBoard(newBoard);// reassigning the board with the letters on it
    setCurrAttempt({...currAttempt, letterPosition: currAttempt.letterPosition + 1});
  };

  const onDeleteLetter = ()=>{
    if(currAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPosition: currAttempt.letterPosition - 1})
  }

  const onEnter = ()=>{
      if(currAttempt.letterPosition !== 5) return;
      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPosition: 0});
  }

  return (
    <div className='App'>
        <WorldContext.Provider value={{board, 
        correctWord,
        setBoard,
        currAttempt,
        setCurrAttempt,
        onSelectLetter,
        onDeleteLetter,
        onEnter}}>
            <div className='game'>
                <Board/>
                <Keyboard/>
            </div>
        </WorldContext.Provider>
    </div>
  )
};

export default App;
