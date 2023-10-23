import React, {useContext, useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import MyContext from "../../context/MyContext";
const NewExpense = (props) => {
	const { visible, setVisible, onVisible, stopVisible } = useContext(MyContext);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id : Math.random()
		}
		props.onAddExpense(expenseData)
		props.onYearChange(expenseData.date.getFullYear().toString());
	}
	return (
		<div className="new-expense">
			{!visible && <button onClick={onVisible} >Add New Expense</button> }
			{visible &&
				<ExpenseForm
				onEditExpenseData={props.onEditExpense}
				onSaveExpenseData={saveExpenseDataHandler}
				stopVisible={props.stopVisible}
				onYearChange={props.onYearChange}/>
			}
		</div>
	)
}
export default NewExpense;