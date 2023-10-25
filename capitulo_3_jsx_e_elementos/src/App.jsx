import "./App.css";
import AlertButton from "./components/AlertButton";
import Greeting from "./components/Greeting";
import Greeting2 from "./components/Greeting2";
import LoginStatus from "./components/LoginStatus";

function App() {
  return (
    <>
      {/* Criando primeiro componente funcional */}
      <Greeting />
      {/* Interpolação de variáveis */}
      <Greeting2 />
      {/* Condicional e ternário em JSX */}
      <LoginStatus />
      {/* Incorporando funções */}
      <AlertButton />
    </>
  );
}

export default App;
