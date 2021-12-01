import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filterdTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterdTodos.map((todo) => (
          <Todo
            todo={todo}
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
