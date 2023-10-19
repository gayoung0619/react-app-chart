import React, {useContext} from "react";
import './ExpenseItem.css'
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import MyContext from "../../context/MyContext";
const ExpenseItem = (props) => {
	const { visible, setVisible, onVisible, stopVisible } = useContext(MyContext);

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<div>
						<p>{props.category}</p>
						<h2>{props.title}</h2>
					</div>
					<button type="button" onClick={()=> props.handleDelete(props.id)}>delete</button>
					<button type="button" onClick={onVisible}>modify</button>
					<div className="expense-item__price">{`$${props.amount}`}</div>
				</div>
			</Card>
		</li>
	)
}
export default ExpenseItem;