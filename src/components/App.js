import { useState } from "react";
import Game from "./Game";
import Letters from "./Letters";
import Guess from "./Guess";
import palavras from "../palavras"
import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

const App = () => {

  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(0)
  const [word, setWord] = useState([])
  const [wordShown, setWordShown] = useState([])
  const [chosenLetters, setChosenLetters] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [isVictory, setIsVictory] = useState(false)
  const [guess, setGuess] = useState("")

  const chooseWord = () => {
    setErrors(0)
    setDisabled(false)
    setGameOver(false)
    setIsVictory(false)
    setGuess("")
    const newWord = palavras[Math.floor(Math.random() * (palavras.length - 1))]
    setWord(newWord.split(""))
    setWordShown(Array(newWord.length).fill('_'))
    setChosenLetters([])
  }
  
  const handleButtonClick = (letter) => {
    setChosenLetters([ ...chosenLetters, letter ]);

    const wordNormalized = word.join("").normalize('NFD').replace(/[\u0300-\u036f]/g, "").split("")
    if (wordNormalized.includes(letter.toLowerCase())) {
      let newWordShown = [...wordShown];
      wordNormalized.forEach((l, pos) => {
        if (letter === l)
          newWordShown[pos] = word[pos]  
      })
      setWordShown(newWordShown)
    }
    else {
      const newErrors = errors + 1
      setErrors(newErrors)
    }
  }

  const handleGuessButton = () => {
    if (guess.toLowerCase() === word.join("")) {
      finishGame(true)
    }
    else {
      setErrors(6)
      finishGame(false)
    }
    
  }

  const finishGame = (victory) => {
    setWordShown(word.join("").split(""))
    setGameOver(true)
    setDisabled(true)
    setGuess("")
    victory ? setIsVictory(true) : setIsVictory(false)
  }

  //Check win/loose
  if (errors === 6 && !disabled) {
    finishGame(false)
  } else if (wordShown.join("") === word.join("") && !disabled) {
    finishGame(true)
  }


  return (
    <Main>
      <Game errors={errors} wordShown={wordShown} clickStart={() => chooseWord()} disabled={disabled} gameOver={gameOver} isVictory={isVictory}/>
      <Letters disabled={disabled} chosenLetters={chosenLetters} handleButtonClick={handleButtonClick}/>
      <Guess disabled={disabled} guess={guess} setGuess={setGuess} handleGuessButton={handleGuessButton}/>
    </Main>
  );
}

export default App;
