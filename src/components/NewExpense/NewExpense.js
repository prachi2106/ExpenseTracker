import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    const[isOpen, setOpen] = React.useState(false);

const saveExpenseFormHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id : Math.floor(Math.random()*10).toString()
    }
props.onAddExpense(expenseData);
setOpen(false)
}

const isOpenHandler =() =>{
setOpen(true)
}

const closeForm = () =>{
    setOpen(false);
}   

return <div className="new-expense">
{!isOpen && <button onClick={isOpenHandler}>Add new Expense</button>}
{isOpen && <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler} onCancel={closeForm}/>}
</div>

}

export default NewExpense;