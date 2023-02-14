import Game from "./Game";
import Letters from "./Letters";
import palavras from "../palavras"


const App = () => {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <main className="App">
      <Game />
      <div className="container">
        <div className="letters">
          {alfabeto.map(letter => { 
            return <button key={letter} disabled={true}>{letter.toUpperCase()}</button>
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
