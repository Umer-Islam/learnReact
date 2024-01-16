import React, { useState } from "react";

export default function ChangeNum() {
  const [quantity, setQuantity] = useState(1);
  function handleChange(event) {
    if (quantity >= 1) {
      setQuantity(event.target.value);
    }
  }
  return (
    <div>
      <input type="number" value={quantity} onChange={handleChange} />
      <p>Quantity: {quantity}</p>
    </div>
  );
}
