function Jogo({ word, newGame, hiddenWord, error, endGameStatus }) {

    return (
        <div className="game">
            <img data-test="game-image" src={`./assets/forca${error}.png`} alt="Imagem indisponível" />
            <div className="palavraGame">
                <input data-test="choose-word" onClick={newGame}
                    type="button" value={"Escolher Palavra"} />
                <div
                    className={endGameStatus}
                    data-test="word"
                    data-answer={word}
                >{hiddenWord.join('')}</div>
            </div>
        </div>
    )
}

export default Jogo