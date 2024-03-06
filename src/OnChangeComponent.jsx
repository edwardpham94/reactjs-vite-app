import { useState } from "react";

function OnChangeComponent() {
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("");
  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePayment(event) {
    setPayment(event.target.value);
  }
  return (
    <>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <p>Value: {name}</p>
      </div>

      <div>
        <select value={payment} name="" id="" onChange={onChangePayment}>
          <option value="">Pick one</option>
          <option value="Visa">Visa</option>
          <option value="Master Card">MasterCard</option>
          <option value="GiftCard">Giftcard</option>
        </select>
        <p>Value: {payment}</p>
      </div>
    </>
  );
}

export default OnChangeComponent;
