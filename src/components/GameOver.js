import React,{useContext} from 'react';
import { WorldContext } from '../App';

const GameOver = () => {
  const {gameOver, setGameOver, correctWord, currAttempt} = useContext(WorldContext);
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? 'You have guessed Correctly': 'You suck!'}</h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
};

export default GameOver;
