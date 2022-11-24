function Jogo({gameStart, newGame, hiddenWord}) {

    return (
        <div className="game">
            <img srcSet="./assets/forca0.png" alt="Imagem indisponível" />
            <div className="palavraGame">
                <input onClick={newGame}
                    type="button" value="Escolher Palavra" />
                <p>{(!gameStart) ? "" : hiddenWord}</p>
            </div>
        </div>
    )
}

export default Jogo