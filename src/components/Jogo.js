function Jogo({newGame, hiddenWord, error, endGameStatus}) {

    return (
        <div className="game">
            <img srcSet={`./assets/forca${error}.png`} alt="Imagem indisponível" />
            <div className="palavraGame">
                <input onClick={newGame}
                    type="button" value={"Escolher Palavra"} />
                <p className={endGameStatus} >{hiddenWord}</p>
            </div>
        </div>
    )
}

export default Jogo