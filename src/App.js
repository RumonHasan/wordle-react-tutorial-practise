import React,{useState, createContext, useEffect} from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './Style.css';
import { defaultBoard } from './Words';
import { generateWordSet } from './Words';

export const WorldContext = createContext();

const App = () => {
  // primary states for the game
  const [board, setBoard] = useState(defaultBoard);
  // atempt denotes the row number and the letter position denotes the column number
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPosition: 0});
  const [wordSet, setWordset] = useState(new Set());
  // letters that will no longer function 
  const [disabledLetters, setDisabledletters] = useState([]);
  const [gameOver, setGameOver] = useState({gameState: false, guessedWord: false});

  // generating the words
  useEffect(()=>{
    generateWordSet().then((words)=>setWordset(words.wordSet));
  },[]);

  // sample word for error check
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

      let currentWord = ''; // current typed word

      // checking whether 5 letter word entered is a word available in the set
      for(let i = 0; i < currAttempt.letterPosition; i++){
        currentWord += board[currAttempt.attempt][i];
      }
      if(wordSet.has(currentWord.toLowerCase())){
        setCurrAttempt({attempt: currAttempt.attempt + 1, letterPosition: 0});
      }else{
        alert('Word has not been found')
      }

      if(currentWord === correctWord){
        alert('Game ended');
      }

      
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
        onEnter,
        disabledLetters,
        setDisabledletters,
        setGameOver,
        gameOver}}>
            <div className='game'>
                <Board/>
                <Keyboard/>
            </div>
        </WorldContext.Provider>
    </div>
  )
};

export default App;
