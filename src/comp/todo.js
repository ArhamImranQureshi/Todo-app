import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleInputChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (currentTodo.trim() !== "") {
      setTodos([...todos, currentTodo]);
      setCurrentTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index, newValue) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newValue;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={currentTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button
              onClick={() => {
                const newTodo = prompt("Enter a new value", todo);
                if (newTodo !== null) {
                  handleEditTodo(index, newTodo);
                }
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;