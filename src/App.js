import React, { useState } from "react";
import palavras from "./palavras";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";
import "./styles/reset.css";
import "./styles/style.css";


function App() {
  const [gameStart, setGameStart] = useState(false);
  const [error, setError] = useState(0);
  const [word, setWord] = useState("");
  const [arrayWord, setArrayWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([""]);
  const [chosedLetter, setChosedLetter] = useState([]);
  const [endGameStatus, setEndGameStatus] = useState("");
  const [inputGuess, setInputGuess] = useState("");


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