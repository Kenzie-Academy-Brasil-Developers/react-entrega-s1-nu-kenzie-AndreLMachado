import "./style.css";
import { Card } from "../Card";
const List = ({
  listTransactions,
  setListTransactions,
  setListTransactionsFilters,
}) => {
  return (
    <div>
      <ul className="listaTransacoes">
        {listTransactions.map((transaction, index) => (
          <Card
            key={index}
            transaction={transaction}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setListTransactionsFilters={setListTransactionsFilters}
          />
        ))}
      </ul>
    </div>
  );
};

export { List };
