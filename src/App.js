import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import logo from "../src/components/assets/img/logo.png";
import filterTipo from "./components/filters";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [listTransactionsFilters, setListTransactionsFilters] = useState([
    ...listTransactions,
  ]);
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
              setListTransactionsFilters={setListTransactionsFilters}
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
              <button
                className="Todos"
                onClick={() => setListTransactionsFilters(listTransactions)}
              >
                Todos
              </button>
              <button
                className="Entradas"
                onClick={() =>
                  filterTipo(
                    listTransactions,
                    "Entrada",
                    setListTransactionsFilters
                  )
                }
              >
                Entradas
              </button>
              <button
                className="Despesas"
                onClick={() =>
                  filterTipo(
                    listTransactions,
                    "Despesa",
                    setListTransactionsFilters
                  )
                }
              >
                Despesas
              </button>
            </div>
          </div>
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setListTransactionsFilters={setListTransactionsFilters}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
