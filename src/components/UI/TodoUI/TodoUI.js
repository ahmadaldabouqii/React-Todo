import React, { useEffect } from "react";
import Form from "../../Todo/Form";
import TodoList from "../../Todo/TodoList";
import "./TodoUI.css";

const TodoUI = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
  filterdTodos,
  setFilterdTodos,
}) => {
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterdTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterdTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterdTodos(todos);
        break;
    }
  };

  const saveToLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let toLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(toLocal);
    }
  };

  return (
    <div className="TodoBody">
      <header className="Header-Todo">
        <h1 className="h1-Todo">Ed's Todo List</h1>
      </header>
      <Form
        className="Form-Todo"
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList filterdTodos={filterdTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
};
export default TodoUI;
