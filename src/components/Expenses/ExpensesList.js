import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate";

const ExpensesList = (props) => {
	// props.items.sort((a, b) => new Date(a.date) - new Date(b.date));
	const groupedComponents = {};
	const uniqueDatesSet = new Set();

	props.items.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach((expense) => {
		const date = new Date(expense.date);
		const offset = date.getTimezoneOffset() * 60000;
		const utcDate = new Date(date - offset);
		const dateKey = utcDate.toISOString().split('T')[0];

		uniqueDatesSet.add(dateKey);

		if (!groupedComponents[dateKey]) {
			groupedComponents[dateKey] = [];
		}
		groupedComponents[dateKey].push(expense);
	});
	const uniqueDates = Array.from(uniqueDatesSet);

	return (
		<ul className="expenses-list">
			{uniqueDates.length <= 0?
				<p className="expense-item__nodata">NO DATA</p>
				:
				uniqueDates.map((dateKey) => (
				<div key={dateKey}>
					<ExpenseDate date={groupedComponents[dateKey][0].date} />
					{groupedComponents[dateKey].map((component) => (
						<ExpenseItem
							key={component.id}
							id={component.id}
							category={component.category}
							title={component.title}
							time={component.date}
							amount={component.amount}
							handleDelete={props.handleDelete}
						/>
					))}
				</div>
			))
			}
		</ul>
	);
};

export default ExpensesList;
