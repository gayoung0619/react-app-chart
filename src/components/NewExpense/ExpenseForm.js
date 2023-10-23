import React, {useContext, useState} from "react";
import './ExpenseForm.css'
import MyContext from "../../context/MyContext";
const ExpenseForm = (props) => {
	const { stopVisible, edit, setEdit, editHandler } = useContext(MyContext);
	const [selectedOption, setSelectedOption] = useState('');
	const [options, setOptions] = useState([
		{value: 'default', label: '카테고리 선택'},
		{value: '식비', label: '식비'},
		{value: '쇼핑', label: '쇼핑'},
		{value: '취미', label: '취미'},
		{value: '보험', label: '보험'},
		{value: '공과', label: '공과'},
		{value: '교통', label: '교통'}

	]);
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const [toggle, setToggle] = useState(true);
	const onTrue = () => {
		setSelectedOption('');
		setToggle(true);
	}
	const onFalse = () => {
		setSelectedOption('');
		setToggle(false);
	}
	const onAddCategory = () => {
		setSelectedOption('');
		setToggle(true);
		let newOptionValue = selectedOption;
		const newOption = { value: newOptionValue, label: newOptionValue }
		setOptions((prevOptions) => [...prevOptions, newOption])

	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const expenseData = {
			category: selectedOption,
			title: title,
			amount: +amount,
			date: new Date(date)
		}
		// 수정 or 추가모드 구분
		if (edit) {
			// 수정 모드일 때, 수정 핸들러 호출
			props.onEditExpenseData(expenseData);
			props.onYearChange(expenseData.date.getFullYear().toString());
			setEdit(false);
		} else {
			// 추가 모드일 때, 추가 핸들러 호출
			props.onSaveExpenseData(expenseData);
			setTitle('');
			setAmount('');
			setDate('');
		}
	}
	const handleSelectChange = (e) => {
		setSelectedOption(e.target.value)
	}
	const handleAddCategory = (e) => {
		setSelectedOption(e.target.value);
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
					{toggle?
							<div className="new-expense__control">
								<label htmlFor="Category">Category
									<span className="new-expense__control-category-add" onClick={onFalse}>ADD</span>
								</label>
								<select onChange={handleSelectChange}>
									{
										options.map((option)=>{
											return (
												<option key={option.value} value={option.value}>
													{option.label}
												</option>
												)
										})
									}
								</select>
							</div>
							:
							<div className="new-expense__control">
								<label htmlFor="AddCategory">Add a new category
									<span className="new-expense__control-category-add" onClick={onAddCategory}>ADD</span>
									<span className="new-expense__control-category-cancel" onClick={onTrue}>CANCEL</span>
								</label>
								<input value={selectedOption} onChange={handleAddCategory} />
							</div>
					}
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
						<button>
							{edit? 'Edit' : 'Add Expense'}
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}
export default ExpenseForm;