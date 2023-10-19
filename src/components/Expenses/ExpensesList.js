import React, {useRef} from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					id={expense.id}
					category={expense.category}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					handleDelete={props.handleDelete}
				/>
			))}
		</ul>
	)
}
export default ExpensesList;