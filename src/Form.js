//Form Compoent
import React from "react";
import { useState } from "react";

export default function Form({ onAddItems }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    if (!name) return;
    onAddItems(newItem);
    setName("");
    setQuantity(1);

    console.log(newItem);
  };

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          // or use onChange={(e) => setQuantity(+e.target.value)}
          className="select"
        >
          {Array.from({ length: 40 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="submission-line__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add an item..."
        />
        <button className="submission-line__btn">Add</button>
      </form>
    </div>
  );
}
