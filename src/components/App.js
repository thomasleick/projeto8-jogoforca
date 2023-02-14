import { useState } from "react";
import Game from "./Game";
import Letters from "./Letters";
import palavras from "../palavras"


const App = () => {

  const [disabled, setDisabled] = useState(true)

  return (
    <main className="App">
      <Game />
      <Letters disabled={disabled}/>
    </main>
  );
}

export default App;
