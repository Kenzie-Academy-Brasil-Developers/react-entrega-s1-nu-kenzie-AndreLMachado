import imgLixo from "../assets/img/lixo.png";

import "./style.css";
const Card = ({
  transaction,
  listTransactions,
  setListTransactions,
  setListTransactionsFilters,
}) => {
  const removeTransation = () => {
    setListTransactions(
      listTransactions.filter((item) => item.indice !== transaction.indice)
    );
    setListTransactionsFilters(listTransactions);
  };

  console.log(transaction);
  return (
    <li className={transaction.tipo}>
      <div>
        <p className="desc">Descricao: {transaction.descricao}</p>
        <span className="tipo">{transaction.tipo}</span>
      </div>
      <div className="valorEBotao">
        <p className="valorCard">R$: {transaction.valor}</p>
        <button className="excluir">
          <img
            className="imgExcluir"
            src={imgLixo}
            alt=""
            onClick={removeTransation}
          />
        </button>
      </div>
    </li>
  );
};

export { Card };
