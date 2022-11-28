import styled from "styled-components";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

function Jogo({ word, newGame, hiddenWord, error, endGameStatus }) {
    const imgForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
    return (
        <Game>
            <img data-test="game-image" src={imgForca[error]} alt="Imagem indisponível" />
            <Botao>
                <input data-test="choose-word" onClick={newGame}
                    type="button" value={"Escolher Palavra"} />
                <PalavraGame
                    className={endGameStatus}
                    data-test="word"
                    data-answer={word}
                >{hiddenWord.join('')}</PalavraGame>
            </Botao>
        </Game>
    )
}

export default Jogo

const Game = styled.div`
  margin-top: 2%;
  width: 70%;
  display: flex;
  justify-content: space-between;
    img {
        width: 35%;
    }
    input {
        width: 200px;
        height: 60px;
        background: #27ae60;
        border-radius: 8px;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #ffffff;
    }
`

const Botao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const PalavraGame = styled.div`
    margin-top: 30%;
    font-family: "Noto Sans", sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 50px;
    line-height: 68px;
    letter-spacing: 10px;
`