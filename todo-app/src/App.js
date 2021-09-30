import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addATodo = (event) => {
    event.preventDefault();
    setTodos([inputText, ...todos]);
    setInputText("");
    console.log("todos list", [...todos, inputText]);
  };
  return (
    //BEM naming
    <div className="app">
      <h1>ToDo App</h1>

      <form>
        <input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          type="text"
        />
        <button disabled={!inputText} type="submit" onClick={addATodo}>
          ADD ToDo
        </button>
      </form>

      {todos.map((todo) => (
        <Todo text={todo} />
      ))}
    </div>
  );
}

export default App;
