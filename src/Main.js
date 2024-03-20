// Main Component

import React from "react";
import List from "./List";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

export default function Main() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "isChecked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  const [obtainedItems, setObtainedItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  // const handleObtainedItem = (itemId) => {
  //   const item = items.find((item) => item.id === itemId);
  //   setObtainedItems([...obtainedItems, item]);
  //   handleRemoveItem(itemId);
  // };

  const handleChecked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setItems([]);
      setObtainedItems([]);
    }
  };

  return (
    <div className="container">
      <div select-container>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select-style"
        >
          <option value="input">Sort by input</option>
          <option value="name">Sort by Name</option>
          <option value="isChecked">Sort by Status</option>
        </select>

        <button onClick={handleClearList} className="button-style">
          Clear
        </button>
      </div>
      <Form onAddItems={handleAddItems} />
      <List
        items={sortedItems}
        onRemove={handleRemoveItem}
        onChecked={handleChecked}
      />

      <br />

      <Footer items={items} obtainedItems={obtainedItems} />
    </div>
  );
}
