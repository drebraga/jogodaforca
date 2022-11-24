import React, { useState } from "react";
import palavras from "./palavras";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [error, setError] = useState(0);
  const [word, setWord] = useState("");
  const [arrayWord, setArrayWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([""]);
  const [chosedLetter, setChosedLetter] = useState([]);
  const [endGameStatus, setEndGameStatus] = useState("");

  console.log("palavra normal " + word);
  console.log(error);


  // --------------------------------------------------- Escolhe o numero para o array de palavras
  function escolhePalavra() {
    return Math.round(Math.random() * palavras.length);
  }


  // --------------------------------------------------- Finaliza o jogo
  function endGame(palavra, erros) {
    console.log(erros);
    if (!palavra.includes("_")) {
      setEndGameStatus("ganhou");
      setGameStart(false);
      setHiddenWord(Array.from(word));
    } else if (palavra.includes("_") && erros >= 6) {
      setEndGameStatus("perdeu");
      setGameStart(false);
      setHiddenWord(Array.from(word));
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
    if (!arrayWord.includes(letra)) {
      let erros = error + 1;
      setError(erros)
      endGame(hiddenWord, erros);
    } else {
      showCorrectsLetters(letra);
    }
  }


  // --------------------------------------------------- Mostra a(s) letras(s) selecionada(s) se houver na palavra
  function showCorrectsLetters(letra) {
    const contem = hiddenWord.map((e, i) => (arrayWord[i] === letra) ? e = letra : e)
    setHiddenWord(contem);
    endGame(contem);
  }



  return (
    <div className="App">
      <Jogo newGame={newGame} hiddenWord={hiddenWord} error={error} endGameStatus={endGameStatus} />
      <Letras gameStart={gameStart} chosedLetter={chosedLetter} compareHiddenLetter={compareHiddenLetter} error={error} />
      <Chute gameStart={gameStart} />
    </div>
  );
}

export default App;