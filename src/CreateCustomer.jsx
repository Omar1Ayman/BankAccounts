import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "./redux/reducers/CustomerREducer";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalID, setNationalId] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    if (!fullName || !nationalID) return;
    dispatch(createCustomer(fullName, nationalID));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalID}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
