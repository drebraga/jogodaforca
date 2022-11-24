function Jogo({gameStart, newGame, hiddenWord, error}) {

    return (
        <div className="game">
            <img srcSet={`./assets/forca${error}.png`} alt="Imagem indisponível" />
            <div className="palavraGame">
                <input onClick={newGame}
                    type="button" value={"Escolher Palavra"} />
                <p>{(!gameStart) ? "" : hiddenWord}</p>
            </div>
        </div>
    )
}

export default Jogo