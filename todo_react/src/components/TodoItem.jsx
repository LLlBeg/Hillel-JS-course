import React from "react";

export default function TodoItem({ onItemClick, item, onDeleteButtonClick }) {
  const { completed, title, id } = item;

  return (
    <li
      style={{ backgroundColor: getStyle(completed) }}
      onClick={() => onItemClick(id)}
    >
      {title}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDeleteButtonClick(id);
        }}
        title="Delete item"
      >
        Delete
      </button>
    </li>
  );
}

function getStyle(completed) {
  return completed ? "lightblue" : "yellow";
}
