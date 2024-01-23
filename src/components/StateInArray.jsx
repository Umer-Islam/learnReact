import { useState } from "react";

export default function StateInArray() {
  const [fruits, setFruits] = useState(["🍎", "🍌", "🍒", "damson", "🍓"]);
  function handleAdd() {
    const newFruit = document.getElementById("fruitInput").value;
    document.getElementById("fruitInput").value = "";
    setFruits((f) => [...f, newFruit]);
  }
  function handleRemove(index) {
    setFruits(fruits.filter((_, i) => i !== index));
  }

  return (
    <div className="fruits">
      <h1>List of Fruits</h1>
      <p className="remove">Click on the list item to remove it</p>
      <ul className="fruit-list">
        {" "}
        {fruits.map((fruit, index) => (
          <li
            key={index}
            className="list-item"
            onClick={() => handleRemove(index)}
          >
            {" "}
            {fruit}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="add new fruit" id="fruitInput" />
      <button onClick={handleAdd}>Add fruit</button>
    </div>
  );
}
