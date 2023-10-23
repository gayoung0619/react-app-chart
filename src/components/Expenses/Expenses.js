import React, {useContext, useState} from "react";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import MyContext from "../../context/MyContext";

const Expenses = (props) => {
	const filterChangeHandler = (selectYear) => {
		props.setYear(selectYear)
	}
	let filtered = props.items.filter((expenses)=>{
		return expenses.date.getFullYear().toString() === props.year
	})
	const deleteItem = (targetId) => {
		filtered = filtered.filter((expenses) => expenses.id !== targetId);
		console.log(filtered);
		props.setRealData(filtered);
	}
	return (
		<Card className="expenses">
			<ExpenseFilter selected={props.year} onfilterChange={filterChangeHandler} />
			<ExpenseChart expenses={filtered} />
			<ExpensesList setIsEditing={props.setIsEditing} items={filtered} handleDelete={deleteItem} />
		</Card>
	)
}
export default Expenses;