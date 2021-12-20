import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import TodoUI from "./components/UI/TodoUI/TodoUI";
import ExpenseTracker from "./components/UI/ExpenseTrackerUI/ExpenseTrackerUI";

const App = () => {
  // TODO States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdTodos, setFilterdTodos] = useState([]);

  // Expenses State
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(expense + income);

  return (
    <Router>
      {/* <Routes>
        <Route
          path="/TodoUI"
          element={
            <TodoUI
              inputText={inputText}
              setInputText={setInputText}
              todos={todos}
              setTodos={setTodos}
              status={status}
              setStatus={setStatus}
              filterdTodos={filterdTodos}
              setFilterdTodos={setFilterdTodos}
            />
          }
        />
        <Route
          path="/ExpenseTrackerUI"
          element={
            <ExpenseTracker
              income={income}
              expense={expense}
              total={total}
              setTotal={setTotal}
              setIncome={setIncome}
              setExpense={setExpense}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
      </Routes> */}
      <div className="App">
        <TodoUI
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          filterdTodos={filterdTodos}
          setFilterdTodos={setFilterdTodos}
        />

        {/* <ExpenseTracker
          income={income}
          expense={expense}
          total={total}
          setTotal={setTotal}
          setIncome={setIncome}
          setExpense={setExpense}
          transactions={transactions}
          setTransactions={setTransactions}
        /> */}
      </div>
    </Router>
  );
};
export default App;
