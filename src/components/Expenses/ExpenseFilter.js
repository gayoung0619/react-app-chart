import React, {useState} from "react";
import './ExpenseFilter.css'
const ExpenseFilter = (props) => {
	const selectHandler = (e) => {
		props.onfilterChange(e.target.value)
	}
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select name="" id="" value={props.selected} onChange={selectHandler}>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
				</select>
			</div>
		</div>
	)
}
export default ExpenseFilter;