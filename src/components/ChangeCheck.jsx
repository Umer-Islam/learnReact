import { useState } from "react";

export default function ChangeCheck() {
  const [shipment, setShipment] = useState("Delivery");
  function handleShipment(event) {
    setShipment(event.target.value);
  }
  return (
    <div>
        <h3>Shipment method</h3>
      <label>
        <input
          type="radio"
          value={"PickUp"}
          checked={shipment === "PickUp"}
          onClick={handleShipment}
        />
        PickUp
      </label>
      <label>
        <input
          type="radio"
          value={"Delivery"}
          checked={shipment === "Delivery"}
          onClick={handleShipment}
        />
        Delivery
      </label>
      <p>shipment: {shipment}</p>
    </div>
  );
}
