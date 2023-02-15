import { useState } from "react";
import Game from "./Game";
import Letters from "./Letters";
import palavras from "../palavras"


const App = () => {

  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(0)
  const [word, setWord] = useState([])
  const [wordShown, setWordShown] = useState("")
  const [chosenLetters, setChosenLetters] = useState([]);


  const chooseWord = () => {
    setErrors(0)
    setDisabled(false)
    const newWord = palavras[Math.floor(Math.random() * (palavras.length - 1))]
    setWord(newWord.split(""))
    setWordShown(Array(newWord.length).fill('_'))
    setChosenLetters([])
    console.log(newWord)
  }

  const handleButtonClick = (letter) => {
    setChosenLetters([ ...chosenLetters, letter ]);

    if (word.includes(letter.toLowerCase())) {
      let newWordShown = [...wordShown];
      word.forEach((l, pos) => {
        if (letter === l)
          newWordShown[pos] = l.toUpperCase()  
      })
      setWordShown(newWordShown)
    }
    else {
      const newErrors = errors + 1
      setErrors(newErrors)
    }
      

    
  };

  return (
    <main className="App">
      <Game errors={errors} word={word} wordShown={wordShown} clickStart={() => chooseWord()} disabled={disabled}/>
      <Letters disabled={disabled} chosenLetters={chosenLetters} handleButtonClick={handleButtonClick}/>
    </main>
  );
}

export default App;
