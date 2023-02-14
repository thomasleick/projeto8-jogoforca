const Letters = (props) => {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const { disabled } = props;

    return (
        <div className="container">
            <div className="letters">
            {alfabeto.map(letter => { 
                return <button key={letter} disabled={disabled}>{letter.toUpperCase()}</button>
            })}
            </div>
        </div>
    );
};

export default Letters;