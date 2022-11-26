import forca0 from "/home/andre/Documentos/Driven/projeto_08_jogodaforca/src/assets/forca0.png"
import forca1 from "/home/andre/Documentos/Driven/projeto_08_jogodaforca/src/assets/forca1.png"
import forca2 from "/home/andre/Documentos/Driven/projeto_08_jogodaforca/src/assets/forca2.png"
import forca3 from "/home/andre/Documentos/Driven/projeto_08_jogodaforca/src/assets/forca3.png"
import forca4 from "/home/andre/Documentos/Driven/projeto_08_jogodaforca/src/assets/forca4.png"
import forca5 from "/home/andre/Documentos/Driven/projeto_08_jogodaforca/src/assets/forca5.png"
import forca6 from "/home/andre/Documentos/Driven/projeto_08_jogodaforca/src/assets/forca6.png"

const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

function Jogo({ word, newGame, hiddenWord, error, endGameStatus }) {

    return (
        <div className="game">
            <img data-test="game-image" src={forca[error]} alt="Imagem indisponível" />
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