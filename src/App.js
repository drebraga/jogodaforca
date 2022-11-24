import React, { useState } from "react";
import palavras from "./palavras";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";

function App() {
  let numPalavra;
  const [gameStart, setGameStart] = useState(false);
  const [erros, setErros] = useState(0);
  const [palavra, setPalavra] = useState("");
  const [arrayPalavra, setArrayPalavra] = useState(Array.from(palavra));
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
  const [palavraEscondida, setPalavraEscondida] = useState([]);
  console.log(arrayPalavra);
  console.log(palavraEscondida);

  function newGame() {
    escolhePalavra()
    setGameStart(true);
    setErros(0);
    setPalavra(palavras[numPalavra]);
    setLetrasEscolhidas([]);
    setArrayPalavra(Array.from(palavra));
    setPalavraEscondida(arrayPalavra.map((element) => element = "_"));
  }

  function comparaLetraEscolhida(letra) {
    setLetrasEscolhidas([...letrasEscolhidas, letra]);
    arrayPalavra.includes(letra)
  }

  function escolhePalavra() {
    numPalavra = Math.round(Math.random() * palavras.length);
  } escolhePalavra()

  return (
    <div className="App">
      <Jogo setGameStart={setGameStart} gameStart={gameStart} newGame={newGame} palavraEscondida={palavraEscondida} />
      <Letras gameStart={gameStart} letras={letrasEscolhidas} comparaLetraEscolhida={comparaLetraEscolhida} />
      <Chute />
    </div>
  );
}

export default App;