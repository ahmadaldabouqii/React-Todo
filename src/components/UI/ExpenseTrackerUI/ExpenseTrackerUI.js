import React from "react";
import { Header } from "../../Expenses/Header";
import IncomeExpenses from "../../Expenses/IncomeExpenses";
import TransactionList from "../../Expenses/TransactionList";
import AddTransaction from "../../Expenses/AddTransaction";
import Balance from "../../Expenses/Balance";
import "./ExpenseTrackerUI.css";

function ExpenseTracker({
  income,
  expense,
  total,
  setTotal,
  transactions,
  setTransactions,
  setIncome,
  setExpense,
}) {
  return (
    <div className="ExpenseTrackerBody">
      <Header />
      <Balance total={total} />
      <IncomeExpenses income={income} expense={expense} />
      <TransactionList transactions={transactions} />
      <AddTransaction
        setTotal={setTotal}
        setIncome={setIncome}
        setExpense={setExpense}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default ExpenseTracker;
