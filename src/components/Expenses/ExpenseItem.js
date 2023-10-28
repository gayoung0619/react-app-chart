import React, {useContext, useState} from "react";
import './ExpenseItem.css'
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import MyContext from "../../context/MyContext";
const ExpenseItem = (props) => {
	const { editHandler } = useContext(MyContext);
	return (
		<li>
			<Card className="expense-item">
				{/*<ExpenseDate date={props.date} />*/}
				<div className="expense-item__description">
					<div>
						<p>{props.category}</p>
						<h2>{props.title}</h2>
					</div>
					<div className="expense-item__price">{`$${props.amount}`}</div>
					<button className="expense-item__btn-edit" type="button" onClick={()=> {editHandler(props.id)}}>EDIT</button>
					<button className="expense-item__btn-delete" type="button" onClick={()=> props.handleDelete(props.id)}>DELETE</button>
				</div>
			</Card>
		</li>
	)
}
export default ExpenseItem;