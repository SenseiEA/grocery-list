//List component
import React from "react";
import Item from "./Item";

export default function List({
  items,
  onRemove,
  onChecked,
  onEdit,
  editingItemID,
  setEditingItemID,
  checkedOnly,
  onCheckedOnly,
}) {
  const filteredItems = checkedOnly
    ? items.filter((item) => item.isChecked)
    : items;
  return (
    <ul className="list">
      {filteredItems.map((item) => (
        <li className="list__item" key={item.id}>
          <Item
            item={item}
            onRemove={onRemove}
            onChecked={onChecked}
            onEdit={onEdit}
            checkedOnly={checkedOnly}
            editingItemID={editingItemID}
            setEditingItemID={setEditingItemID}
          />
        </li>
      ))}
    </ul>
  );
}
