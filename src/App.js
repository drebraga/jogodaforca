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


  function endGame(props) {
    console.log(props)
    console.log(props.includes)
    console.log(error === 6)
    if (!props.includes("_") && error < 6) {
      setEndGameStatus("ganhou");
      setGameStart(false);
      setChosedLetter([]);
      setHiddenWord(Array.from(word));
    } else if (props.includes("_") && error > 4) {
      setEndGameStatus("perdeu");
      setGameStart(false);
      setChosedLetter([]);
      setHiddenWord(Array.from(word));
    }
  }


  function newGame() {
    setEndGameStatus("");
    setGameStart(true);
    setError(0);
    setChosedLetter([]);
    const newWord = palavras[escolhePalavra()];
    setWord(newWord);
    setArrayWord(Array.from(newWord));
    setHiddenWord(Array.from(newWord).map((element) => element = "_"));
  }

  function compareHiddenLetter(letra) {
    setChosedLetter([...chosedLetter, letra]);
    if (!arrayWord.includes(letra)) {
      setError(error + 1)
      endGame(hiddenWord);
    } else {
      showCorrectsLetters(letra);
    }
  }

  function showCorrectsLetters(letra) {
    const contem = hiddenWord.map((e, i) => (arrayWord[i] === letra) ? e = letra : e)
    setHiddenWord(contem);
    endGame(contem);
  }

  function escolhePalavra() {
    return Math.round(Math.random() * palavras.length);
  }

  return (
    <div className="App">
      <Jogo newGame={newGame} hiddenWord={hiddenWord} error={error} endGameStatus={endGameStatus} />
      <Letras gameStart={gameStart} chosedLetter={chosedLetter} compareHiddenLetter={compareHiddenLetter} />
      <Chute />
    </div>
  );
}

export default App;