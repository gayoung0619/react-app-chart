import React, {useState} from "react";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
	const [year, setYear] = useState('2023');
	const filterChangeHandler = (selectYear) => {
		setYear(selectYear)
	}
	const filtered = props.items.filter((expenses)=>{
		return expenses.date.getFullYear().toString() === year
	})
	return (
		<Card className="expenses">
			<ExpenseFilter selected={year} onfilterChange={filterChangeHandler} />
			<ExpenseChart expenses={filtered} />
			<ExpensesList items={filtered} />
		</Card>
	)
}
export default Expenses;