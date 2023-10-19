import React, {useContext, useState} from "react";
import './ExpenseForm.css'
import MyContext from "../../context/MyContext";
const ExpenseForm = (props) => {
	const { visible, setVisible, onVisible, stopVisible } = useContext(MyContext);
	const [category, setCategory] = useState('식비');
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const expenseData = {
			category: category,
			title: title,
			amount: +amount,
			date: new Date(date)
		}
		console.log(category);
		props.onSaveExpenseData(expenseData);
		setTitle('');
		setAmount('');
		setDate('');
	}
	const handleCategory = (e) => {
		setCategory(e.target.value)
		console.log(e.target.value)
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
						<label htmlFor="Category">Category</label>
						<select id="Category" value={category} onChange={handleCategory}>
							<option value="식비">식비</option>
							<option value="쇼핑">쇼핑</option>
							<option value="취미">취미</option>
							<option value="쇼핑">보험</option>
							<option value="공과">공과</option>
							<option value="교통">교통</option>
							<option value="주거/통신">주거/통신</option>
						</select>
					</div>

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
						<button type="button" onClick={stopVisible}>Cancel</button>
						<button type="submit">Add Expense</button>
					</div>
				</div>
			</form>
		</div>
	)
}
export default ExpenseForm;