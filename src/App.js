import React, { useState } from "react";
import palavras from "./palavras";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";
import "./styles/reset.css";
import "./styles/style.css";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [error, setError] = useState(0);
  const [word, setWord] = useState("");
  const [arrayWord, setArrayWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([""]);
  const [chosedLetter, setChosedLetter] = useState([]);
  const [endGameStatus, setEndGameStatus] = useState("");
  const [inputGuess, setInputGuess] = useState("");
  const imgForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];


  // --------------------------------------------------- Finaliza o jogo para o chute


  function endGameGuess() {
    if (inputGuess === word) {
      zeraVariaveis("ganhou");
    } else if (inputGuess !== word) {
      zeraVariaveis("perdeu");
      setError(6);
    }
  }


  // --------------------------------------------------- Escolhe o numero para o array de palavras


  function escolhePalavra() {
    return Math.round(Math.random() * palavras.length);
  }


  // --------------------------------------------------- Finaliza o jogo


  function endGame(palavra, erros) {
    if (!palavra.includes("_")) {
      zeraVariaveis("ganhou");
    } else if (palavra.includes("_") && erros === 6) {
      zeraVariaveis("perdeu");
    }
  }


  // --------------------------------------------------- Inicia ou reinicia o jogo


  function newGame() {
    setEndGameStatus("");
    setGameStart(true);
    setError(0);
    setChosedLetter([]);
    let newWord = palavras[escolhePalavra()];
    (newWord === word) ? newWord = palavras[escolhePalavra()] : setWord(newWord);
    setArrayWord(Array.from(newWord));
    setHiddenWord(Array.from(newWord).map((element) => element = "_"));
  }


  // --------------------------------------------------- Compara a letra selecionada na palavra


  function compareHiddenLetter(letra) {
    setChosedLetter([...chosedLetter, letra]);
    if (!word.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").includes(letra)) {
      let erros = error + 1;
      setError(erros);
      endGame(hiddenWord, erros);
    } else {
      showCorrectsLetters(letra);
    }
  }


  // --------------------------------------------------- Mostra a(s) letras(s) selecionada(s) se houver na palavra


  function showCorrectsLetters(letra) {
    const contem = hiddenWord.map((e, i) =>
      (arrayWord[i].normalize("NFD").replace(/[^a-zA-Z\s]/g, "") === letra) ?
        (e = arrayWord[i]) : (e)
    );
    setHiddenWord(contem);
    endGame(contem);
  }


  // --------------------------------------------------- Mostra a(s) letras(s) selecionada(s) se houver na palavra


  function zeraVariaveis(result) {
    setEndGameStatus(result);
    setGameStart(false);
    setChosedLetter([]);
    setInputGuess("");
    setHiddenWord(Array.from(word));
  }


  return (
    <div className="App">
      <Jogo
        gameStart={gameStart}
        word={word} newGame={newGame}
        hiddenWord={hiddenWord}
        error={error}
        endGameStatus={endGameStatus}
        imgForca={imgForca}
      />
      <Letras
        gameStart={gameStart}
        chosedLetter={chosedLetter}
        compareHiddenLetter={compareHiddenLetter}
        error={error}
      />
      <Chute
        gameStart={gameStart}
        setInputGuess={setInputGuess}
        inputGuess={inputGuess}
        endGameGuess={endGameGuess}
      />
    </div>
  );
}

export default App;