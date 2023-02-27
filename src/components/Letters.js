import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly; 
  width: 100%;
`

const LettersDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 676px;
`
const Button = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  width: 40px;
  height: 40px;
  color: #39739D;
  background-color: #E1ECF4;
  border: 1px solid #7AA7C7;
  border-radius: 3px;
  margin: 6px 6px;
  &:disabled{background-color: #798A9F;}
  
`
const Letters = (props) => {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const { disabled, chosenLetters, handleButtonClick } = props;
  
    return (
      <Container>
        <LettersDiv>
          {alfabeto.map((letter) => {
            const isChosen = chosenLetters.includes(letter);
            return (
              <Button
                key={letter}
                onClick={() => handleButtonClick(letter)}
                disabled={disabled || isChosen}
                data-test="letter"
              >
                {letter.toUpperCase()}
              </Button>
            );
          })}
        </LettersDiv>
      </Container>
    );
  };

export default Letters;