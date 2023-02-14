import { useState } from "react";
import Game from "./Game";
import Letters from "./Letters";
import palavras from "../palavras"


const App = () => {

  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState(0)
  const [word, setWord] = useState("")
  const [wordShown, setWordShown] = useState("")


  const chooseWord = () => {
    setErrors(0);
    setDisabled(false);
    setWord(palavras[Math.floor(Math.random() * (palavras.length - 1))])
    setWordShown([...word].map(x => "_"))
  }

  return (
    <main className="App">
      <Game errors={errors} word={word} wordShown={wordShown} clickStart={() => chooseWord()}/>
      <Letters disabled={disabled}/>
    </main>
  );
}

export default App;
