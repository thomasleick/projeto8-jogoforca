import palavras from "../palavras"

const App = () => {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <main className="App">
      <div className="container top">
        <div className="left">
          <img src="../assets/forca0.png" />
        </div>
        <div className="right">
          <button >Escolher Palavra</button>
        </div>
      </div>
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
