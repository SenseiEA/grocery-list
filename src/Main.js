// Main Component

import React from "react";
import List from "./List";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

export default function Main() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [editingItemID, setEditingItemID] = useState(null);
  const [checkedOnly, setCheckedOnly] = useState(false);
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "isChecked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
  if (sortBy === "quantity")
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);

  const [obtainedItems, setObtainedItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleEditItem = (itemId, newName, newQuantity) => {
    setItems((items) =>
      items.map((item) =>
        item.id === itemId
          ? { ...item, name: newName, quantity: newQuantity }
          : item
      )
    );
    setEditingItemID(null);
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

  const handleCheckedOnly = () => {
    setCheckedOnly(!checkedOnly);
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
          <option value="quantity">Sort by Quantity</option>
          <option value="isChecked">Sort by Status</option>
        </select>

        <button onClick={handleClearList} className="button-style">
          Clear
        </button>
        <button onClick={handleCheckedOnly} className="button-style">
          {checkedOnly ? "Show All" : "Show Checked Only"}
        </button>
      </div>
      <Form onAddItems={handleAddItems} />
      <List
        items={sortedItems}
        onRemove={handleRemoveItem}
        onChecked={handleChecked}
        onEdit={handleEditItem}
        editingItemID={editingItemID}
        setEditingItemID={setEditingItemID}
        checkedOnly={checkedOnly}
        onCheckedOnly={handleCheckedOnly}
      />

      <br />

      <Footer items={items} obtainedItems={obtainedItems} />
    </div>
  );
}
