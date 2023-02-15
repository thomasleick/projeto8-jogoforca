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
        <div className="container top">
            <div className="left">
            <img src={imgs[errors]} alt="Jogo da Forca"/>
            </div>
            <div className="right">
            <button onClick={clickStart} data-test="choose-word">Escolher Palavra</button>
            <h1 style={gameOver ? isVictory ? {color: "green"} : {color: "red"} : {color: "black"}}>{(!disabled || gameOver) ? (wordShown ? wordShown.join(" ") : "") : ""}</h1>
            </div>
        </div>
    );
};

export default Game;