import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props)=>{

  const [isEditing ,setisEditing] = useState(false)

const saveExpenseDataHandler = (enteredexpensedata) =>{
  const expenseData = {
      ...enteredexpensedata,
      id: Math.random().toString()
  }
  props.onaddExpense(expenseData)
  setisEditing(false)
}

const setEditing=()=>{
  setisEditing(true)
}
const stopEditing = ()=>{
  setisEditing(false)
}

  return (
      <div className="new-expense">
        { !isEditing && <button onClick={setEditing}>Add New Expense</button>}
          { isEditing && <ExpenseForm onSaveExpense = {saveExpenseDataHandler} onStopEditing = {stopEditing}/>}
      </div>
  )
}

export default NewExpense