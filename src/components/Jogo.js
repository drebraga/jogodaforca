function Jogo({gameStart, newGame, palavraEscondida}) {

    return (
        <div className="game">
            <img srcSet="./assets/forca0.png" alt="Imagem indisponível" />
            <div>
                <input onClick={newGame}
                    type="button" value="Escolher Palavra" />
                <p>{(!gameStart) ? "" : palavraEscondida}</p>
            </div>
        </div>
    )
}

export default Jogo