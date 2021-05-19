// import React from 'react'
import "./AllExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteryeard, setFilteryear] = useState("2021");
  const filterYear = (year) => {
    setFilteryear(year);
  };
  const { expenses } = props;
  const FilterdExpense = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteryeard
  );
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterYear={filterYear} selected={filteryeard} />
        <ExpenseChart expenses={FilterdExpense}/>
        <ExpenseList items = {FilterdExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
