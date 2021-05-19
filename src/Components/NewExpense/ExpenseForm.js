import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [userInput , setUserInput] = useState({ title :'' , amount :'' , date:''})

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    //   setUserInput({
    //       ...userInput,
    //       title:event.target.value
    //   })
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    }
    props.onSaveExpense(expenseData)
     setTitle('')
     setAmount('')
     setDate('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            step="0.01"
            min="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2020-01-03"
            max="2022-01-03"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type ="button" onClick={props.onStopEditing}> Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
