//componente: pedaços de encaixe reutilizavéis
import { Componente } from "./components/Mesage/";
// function Componente() {
//   //Componente sempre deve ser nomeado com a primeira letra Maiúscula
//   return <p>Sou um componente</p>;
// }

//Importação de um Hook:
import { useState } from "react";

function App() {
  //para usar códigos javascript dentro de um jsx, precisa-se colocar entre chaves{}
  const [estado, setEstado] = useState(0);

  const adicionar = () => {
    setEstado(estado + 1);
  };

  return (
    <div>
      {/* <Componente nome="Thales" idade={100} /> */}
      <strong>Contador: {estado}</strong>
      <button onClick={adicionar}>Adicionar</button>
    </div>
  );
}

export default App;
