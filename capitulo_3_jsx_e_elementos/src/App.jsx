import "./App.css";
import AlertButton from "./components/AlertButton";
import Button from "./components/Button";
import Exercises from "./components/Exercises";
import Greeting from "./components/Greeting";
import Greeting2 from "./components/Greeting2";
import LoginStatus from "./components/LoginStatus";
import NameList from "./components/NameList";
import PerfilCard from "./components/PerfilCard";
import TaskList from "./components/TaskList";
import TodoList from "./components/TodoList";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const user = "João";

  const tasks = [
    { id: 1, text: "Fazer compras", completed: true },
    { id: 2, text: "Limpar a casa", completed: false },
    { id: 3, text: "Pagar as contas", completed: false },
  ];

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
      {/* Elementos Aninhados */}
      <PerfilCard />
      {/* Propriedades de Componentes Personalizados */}
      <Button className="primary" label="Clique Aqui" />
      {/* Atributos Dinâmicos */}
      <WelcomeMessage name={user} />
      {/* Renderizando Listas */}
      <NameList />
      {/* Consequências de Não Usar key Adequadamente */}
      <TaskList tasks={tasks} />
      {/* Atualizando o DOM Real */}
      <TodoList tasks={tasks} />
      {/* Exercícios */}
      <Exercises />
    </>
  );
}

export default App;
