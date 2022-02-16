import { List } from "../List";

const filterTipo = (listTransactions, tipo, setListTransactionsFilters) => {
  setListTransactionsFilters([...listTransactions]);
  const filtrados = listTransactions.filter(
    (transaction) => transaction.tipo === tipo
  );
  setListTransactionsFilters(filtrados);
};
export default filterTipo;
