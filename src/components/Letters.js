const Letters = (props) => {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const { disabled, chosenLetters, handleButtonClick } = props;
  
    return (
      <div className="container">
        <div className="letters">
          {alfabeto.map((letter) => {
            const isChosen = chosenLetters.includes(letter);
            return (
              <button
                key={letter}
                onClick={() => handleButtonClick(letter)}
                disabled={disabled || isChosen}
              >
                {letter.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

export default Letters;