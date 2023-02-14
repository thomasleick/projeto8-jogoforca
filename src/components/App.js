import palavras from "../palavras"

const App = () => {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <main className="App">
      <div className="container">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="letters">
        {alfabeto.map(letter => { 
          return <button key={letter}>{letter.toUpperCase()}</button>
        })}
      </div>
    </main>
  );
}

export default App;
