import List from "../List";
const filterEntrada = (listTransactions) => {
  console.log(listTransactions);
  return listTransactions.filter(
    (transaction) => transaction.tipo == "entrada"
  );
  console.log(listTransactions);
};
export default filterEntrada;
