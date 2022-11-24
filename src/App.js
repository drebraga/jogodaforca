import React, { useState } from "react";
import palavras from "./palavras";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [erros, setErros] = useState(0);
  const [word, setWord] = useState("");
  const [arrayWord, setArrayWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([]);
  const [chosedLetter, setChosedLetter] = useState([]);
  console.log("palavra normal " + word);
  console.log("palavra normal array " + arrayWord);
  console.log("palavra escondida " + hiddenWord);
  console.log(erros);

  function newGame() {
    setGameStart(true);
    setErros(0);
    setChosedLetter([]);
    const novaPalavra = palavras[escolhePalavra()];
    setWord(novaPalavra);
    setArrayWord(Array.from(novaPalavra));
    setHiddenWord(Array.from(novaPalavra).map((element) => element = "_"));
  }

  function compareHiddenLetter(letra) {
    setChosedLetter([...chosedLetter, letra]);
    !arrayWord.includes(letra) ? setErros(erros + 1) : showCorrectsLetters(letra);
  }

  function showCorrectsLetters(letra) {
    setHiddenWord(hiddenWord.map((e, i) => (arrayWord[i]=== letra) ? e = letra : e));
  }

  function escolhePalavra() {
    return Math.round(Math.random() * palavras.length);
  }

  return (
    <div className="App">
      <Jogo setGameStart={setGameStart} gameStart={gameStart} newGame={newGame} hiddenWord={hiddenWord} />
      <Letras gameStart={gameStart} chosedLetter={chosedLetter} compareHiddenLetter={compareHiddenLetter} />
      <Chute />
    </div>
  );
}

export default App;