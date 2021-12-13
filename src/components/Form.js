import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();

    if (!inputText) return;

    setTodos([
      ...todos,
      {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        text: inputText,
        completed: false
      }
    ]);
    setInputText("");
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputTextHandler}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" onChange={statusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
