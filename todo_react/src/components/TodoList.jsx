import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import React from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    const newItem = {
      title,
      completed: false,
    };
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((data) => setTodos((prevTodos) => [...prevTodos, data]));
  };

  const onItemClick = (id) => {
    const item = todos.find((todo) => todo.id === id);
    const newItem = { ...item, completed: !item.completed };
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    setTodos(todos.map((item) => (item.id === id ? newItem : item)));
  };

  const onDeleteButtonClick = (id) => {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "DELETE",
    });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos")
      .then((resp) => resp.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onDeleteButtonClick={onDeleteButtonClick}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
      <form action="">
        <fieldset>
          <legend>Enter new todo</legend>
          <input
            type="text"
            placeholder="Enter your Todo"
            value={title}
            onChange={onInputChange}
          />
          <button onClick={onSubmitButtonClick}>Add</button>
        </fieldset>
      </form>
    </>
  );
}
