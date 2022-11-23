import palavras from "./palavras";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";

function App() {
  return (
    <div className="App">
      console.log({palavras})
      <Jogo />
      <Letras />
      <Chute />
    </div>
  );
}

export default App;
