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
}) {
  return (
    <ul className="list">
      {items.map((item) => (
        <li className="list__item" key={item.id}>
          <Item
            item={item}
            onRemove={onRemove}
            onChecked={onChecked}
            onEdit={onEdit}
            editingItemID={editingItemID}
            setEditingItemID={setEditingItemID}
          />
        </li>
      ))}
    </ul>
  );
}
