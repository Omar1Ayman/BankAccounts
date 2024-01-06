import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance, loan }) {
  return (
    <div className="balance">
      Balance: {formatCurrency(balance)}
      <br />
      Loan : {loan ? loan : 0}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
    loan: state.account.loan,
  };
}
export default connect(mapStateToProps)(BalanceDisplay);
