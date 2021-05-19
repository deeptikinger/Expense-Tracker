import { useState } from "react";
import "./App.css";
import AllExpenses from "./Components/Expenses/AllExpenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
  const dummy_expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses , setExpenses] = useState(dummy_expense)

  const addExpenseHandler = (expensedata) => {
    setExpenses(prevExpenses=>{
      return [ expensedata, ...prevExpenses]
    })
  };

  return (
    <div className="App">
      <NewExpense onaddExpense={addExpenseHandler}/>
      <AllExpenses expenses={expenses} />
    </div>
  );
};

export default App;
