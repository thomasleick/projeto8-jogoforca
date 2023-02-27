import React from 'react';
import styled from 'styled-components';

const GuessDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const H1 = styled.h1`  
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`
const GuessInput = styled.input`
    box-sizing: border-box;
    width: 353px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    margin: 45px 15px
`

const GuessButton = styled.button`
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
`
const Guess = (params) => {
    const { disabled, guess, setGuess, handleGuessButton } = params

    return (
        <GuessDiv>
            <H1>Já sei a palavra!</H1>
            <GuessInput onChange={e => setGuess(e.target.value)} disabled={disabled} value={guess} data-test="guess-input" />
            <GuessButton onClick={() => handleGuessButton()} disabled={disabled} data-test="guess-button">Chutar</GuessButton>
        </GuessDiv>
    );
};

export default Guess;