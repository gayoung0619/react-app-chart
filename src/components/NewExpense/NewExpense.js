import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
	const [visible, setVisible] = useState(false);
	const onVisible = () => {
		setVisible(true)
	}
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id : Math.random()
		}
		props.onAddExpense(expenseData)
	}
	return (
		<div className="new-expense">
			{!visible && <button onClick={onVisible} >Add New Expense</button> }
			{visible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> }
		</div>
	)
}
export default NewExpense;