import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly; 
    width: 100%;
    height: 600px;
`

const Left = styled.div`
    width: calc(51% - 78px);
    height: calc(100% - 118px);
    padding: 59px 38px;
`

const Img = styled.img`
    max-width: 400px;
    max-height: 466.67px;
`

const Right = styled.div`
    width: calc(49% - 106px);
    height: calc(100% - 178px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding: 89px 53px; 
`

const Button = styled.button`
    width: 200px;
    height: 60px;
    background-color: #27AE60;
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
`

const H1 = styled.h1`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 68px;
`

const Game = (props) => {

    const { errors, wordShown, clickStart, disabled, gameOver, isVictory } = props;

    const imgs = [
        "../assets/forca0.png",
        "../assets/forca1.png",
        "../assets/forca2.png",
        "../assets/forca3.png",
        "../assets/forca4.png",
        "../assets/forca5.png",
        "../assets/forca6.png"
    ];

    return (
        <Container>
            <Left className="left">
                <Img src={imgs[errors]} alt="Jogo da Forca" data-test="game-image"/>
            </Left>
            <Right>
                <Button onClick={clickStart} data-test="choose-word">Escolher Palavra</Button>
                <H1 style={gameOver ? isVictory ? {color: "green"} : {color: "red"} : {color: "black"}}
                    data-test="word"
                >
                    {(!disabled || gameOver) ? (wordShown ? wordShown.join(" ") : "") : ""}
                </H1>
            </Right>
        </Container>
    );
};

export default Game;