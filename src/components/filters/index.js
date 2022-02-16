import { List } from "../List";

const filterTipo = (listTransactions, tipo, setListTransactionsFilters) => {
  setListTransactionsFilters([...listTransactions]);
  setListTransactionsFilters(
    listTransactions.filter((transaction) => transaction.tipo === tipo)
  );
};
export default filterTipo;
