import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Input"
        />
        <button type="submit">ADD</button>
      </form>
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={index} className="todo">
            <span>{todo}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
