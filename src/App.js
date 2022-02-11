import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import logo from "../src/components/assets/img/logo.png";
import filterEntrada from "./components/filters";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="orgHeader">
          <img className="logo" src={logo} alt="logo"></img>
          <button className="inicio">Inicio</button>
        </div>
      </header>
      <div className="App-div">
        <div className="ladoA">
          <div className="formulario">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          </div>
          <div>
            <TotalMoney listTransactions={listTransactions} />
          </div>
        </div>
        <div className="ladoB">
          <div className="filtros">
            <h3 className="resumo">Resumo Financeiro</h3>
            <div>
              <button className="Todos">Todos</button>
              <button className="Entradas" onClick={filterEntrada}>
                Entradas
              </button>
              <button className="Despesas">Despesas</button>
            </div>
          </div>
          <List listTransactions={listTransactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
