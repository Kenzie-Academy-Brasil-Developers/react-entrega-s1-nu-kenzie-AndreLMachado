import "./style.css";
import { Card } from "../Card";
const List = ({ listTransactions }) => {
  return (
    <div>
      <ul className="listaTransacoes">
        {listTransactions.map((transaction, index) => (
          <Card key={index} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export { List };
