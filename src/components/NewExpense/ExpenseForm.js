import React, {useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const expenseData = {
			title: title,
			amount: amount,
			date: new Date(date)
		}
		props.onSaveExpenseData(expenseData);
		setTitle('');
		setAmount('');
		setDate('');
	}
	const handleTitle = (e) => {
		setTitle(e.target.value)
	}
	const handleAmount = (e) => {
		setAmount(e.target.value)
	}
	const handleDate = (e) => {
		setDate(e.target.value)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" value={title} onChange={handleTitle} />
					</div>
					<div className="new-expense__control">
						<label htmlFor="amount">Amount</label>
						<input type="number" id="amount" value={amount} onChange={handleAmount} />
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input type="date" min="2021-01-01" max="2023-10-23" value={date} onChange={handleDate} />
					</div>
					<div className="new-expense__actions">
						<button type="button">Cancel</button>
						<button type="submit">Add Expense</button>
					</div>
				</div>
			</form>
		</div>
	)
}
export default ExpenseForm;