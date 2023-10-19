import React, {useContext, useState} from "react";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import MyContext from "../../context/MyContext";

const Expenses = (props) => {
	const [year, setYear] = useState('2021');
	const filterChangeHandler = (selectYear) => {
		setYear(selectYear)
	}
	let filtered = props.items.filter((expenses)=>{
		return expenses.date.getFullYear().toString() === year
	})
	const deleteItem = (targetId) => {
		filtered = filtered.filter((expenses) => expenses.id !== targetId);
		console.log(filtered);
		props.setRealData(filtered);
	}
	return (
		<Card className="expenses">
			<ExpenseFilter selected={year} onfilterChange={filterChangeHandler} />
			<ExpenseChart expenses={filtered} />
			<ExpensesList
				items={filtered}
				handleDelete={deleteItem}
			/>
		</Card>
	)
}
export default Expenses;