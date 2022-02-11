import imgLixo from "../assets/img/lixo.png";

import "./style.css";
const Card = ({ transaction }) => {
  return (
    <li className={transaction.tipo}>
      <div>
        <p className="desc">Descricao: {transaction.descricao}</p>
        <span className="tipo">{transaction.tipo}</span>
      </div>
      <div className="valorEBotao">
        <p className="valorCard">R$: {transaction.valor}</p>
        <button className="excluir">
          <img className="imgExcluir" src={imgLixo} />
        </button>
      </div>
    </li>
  );
};

export { Card };
