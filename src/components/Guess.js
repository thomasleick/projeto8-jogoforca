import React from 'react';

const Guess = (params) => {
    const { disabled, guess, setGuess, handleGuessButton } = params
    return (
        <div className="guess">
            <h2>Já sei a palavra!</h2>
            <input onChange={e => setGuess(e.target.value)} value={guess}></input>
            <button onClick={() => handleGuessButton()} disabled={disabled} data-test="guess-button">Chutar</button>
        </div>
    );
};

export default Guess;