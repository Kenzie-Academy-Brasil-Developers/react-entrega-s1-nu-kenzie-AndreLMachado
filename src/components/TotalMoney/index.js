import "./style.css";
const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="somaValores">
      <h3 className="valorTotal">Valor total</h3>
      <p className="valorNum">
        {`$ `}
        {listTransactions
          .reduce(
            (acc, transaction) =>
              transaction.tipo === "Despesa"
                ? acc - Number(transaction.valor)
                : acc + Number(transaction.valor),
            0
          )
          .toFixed(2)}
      </p>
    </div>
  );
};

export { TotalMoney };
