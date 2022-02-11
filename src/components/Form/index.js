import "./style.css";
import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("Entrada");

  const setNewTransation = () => {
    setListTransactions([...listTransactions, { valor, descricao, tipo }]);
  };

  return (
    <div className="form">
      <p>Descrição</p>
      <input
        className="descricao"
        value={descricao}
        placeholder="Digite a sua descrição"
        onChange={(event) => setDescricao(event.target.value)}
      />
      <div className="valorForm">
        <div>
          <p>Valor</p>
          <input
            className="inputValor"
            value={valor}
            placeholder="Valor"
            onChange={(event) => setValor(event.target.value)}
          />
        </div>
        <div>
          <p className="tipoValor">Tipo de Valor</p>
          <select
            className="select"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button className="insereValor" onClick={setNewTransation}>
        Inserir Valor
      </button>
    </div>
  );
};

export { Form };
