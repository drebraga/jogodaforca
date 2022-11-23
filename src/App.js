import palavras from "./palavras";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";

function App() {
  console.log(palavras)
  return (
    <div className="App">
      <Jogo />
      <Letras />
      <Chute />
    </div>
  );
}

export default App;
