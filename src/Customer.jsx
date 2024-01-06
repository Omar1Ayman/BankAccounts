import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((state) => state.customer);

  return (
    <h2>👋 Welcome, {customer.fullName ? customer.fullName : "%Name%"}</h2>
  );
}

export default Customer;
