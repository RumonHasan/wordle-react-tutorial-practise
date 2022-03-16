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
  return (
    <div className='App'>
        <WorldContext.Provider value={{board, 
        setBoard,
        currAttempt,
        setCurrAttempt}}>
            <div className='game'>
                <Board/>
                <Keyboard/>
            </div>
        </WorldContext.Provider>
    </div>
  )
};

export default App;
