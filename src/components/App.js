import { useState } from "react";
import Game from "./Game";
import Letters from "./Letters";
import Guess from "./Guess";
import palavras from "../palavras"


const App = () => {

  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(0)
  const [word, setWord] = useState([])
  const [wordShown, setWordShown] = useState([])
  const [chosenLetters, setChosenLetters] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [isVictory, setIsVictory] = useState(false)


  const chooseWord = () => {
    setErrors(0)
    setDisabled(false)
    setGameOver(false)
    setIsVictory(false)
    const newWord = palavras[Math.floor(Math.random() * (palavras.length - 1))]
    setWord(newWord.split(""))
    setWordShown(Array(newWord.length).fill('_'))
    setChosenLetters([])
  }

  const handleButtonClick = (letter) => {
    setChosenLetters([ ...chosenLetters, letter ]);

    if (word.includes(letter.toLowerCase())) {
      let newWordShown = [...wordShown];
      word.forEach((l, pos) => {
        if (letter === l)
          newWordShown[pos] = l  
      })
      setWordShown(newWordShown)
    }
    else {
      const newErrors = errors + 1
      setErrors(newErrors)
    }
  };

  //Check win/loose
  if (errors === 6 && !disabled) {
    setGameOver(true)
    setDisabled(true)
    setWordShown(word.join("").split(""))
  } else if (wordShown.join("") === word.join("") && !disabled) {
    setIsVictory(true)
    setGameOver(true)
    setDisabled(true)
  }


  return (
    <main className="App">
      <Game errors={errors} wordShown={wordShown} clickStart={() => chooseWord()} disabled={disabled} gameOver={gameOver} isVictory={isVictory}/>
      <Letters disabled={disabled} chosenLetters={chosenLetters} handleButtonClick={handleButtonClick}/>
      <Guess />
    </main>
  );
}

export default App;
