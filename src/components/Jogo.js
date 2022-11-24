function Jogo({ newGame, hiddenWord, error, endGameStatus }) {

    return (
        <div className="game">
            <img data-test="game-image" srcSet={`./assets/forca${error}.png`} alt="Imagem indisponível" />
            <div className="palavraGame">
                <input data-test="choose-word" onClick={newGame}
                    type="button" value={"Escolher Palavra"} />
                <p
                    className={endGameStatus}
                    data-test="word"
                    data-answer="word"
                >{hiddenWord.join('')}</p>
            </div>
        </div>
    )
}

export default Jogo