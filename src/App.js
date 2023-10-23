import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, {useContext, useState} from "react";
import MyProvider from "./context/MyProvider";
import MyContext from "./context/MyContext";
import {logDOM} from "@testing-library/react";
function App() {
	const DUMMY_EXPENSES = [
		{
			id: 'e1',
			category: '쇼핑',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			category: '쇼핑',
			title: 'New TV',
			amount: 799.49,
			date: new Date(2021, 2, 12)
		},
		{
			id: 'e3',
			category: '보험',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			category: '쇼핑',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];
	const [realData, setRealData] = useState(DUMMY_EXPENSES);
	const [targetId, setTargetId] = useState(); // list에서 수정버튼 클릭시 반환하는 데이터의 id값
	const [year, setYear] = useState('2021')

	// 년도 변경 핸들러
	const handleYearChange = (selectedYear) => {
		setYear(selectedYear);
	};

	const addExpenseHandler = (expenseData) => {
			// 새 항목 추가
			setRealData((prevExpenses) => [
				...prevExpenses,
				{ ...expenseData, id: Math.random().toString() },
			]);
	};
	const editExpenseHandler = (expense) => {
		// 수정 모드에서는 기존 데이터를 수정 데이터로 대체
		const updatedExpenses = realData.map((exp) =>
			exp.id === targetId ? { ...exp, ...expense } : exp
		);
		setRealData(updatedExpenses);
		console.log("수정모드");
	};

	return (
		<MyProvider targetId={targetId} setTargetId={setTargetId} >
			<NewExpense
				onEditExpense={editExpenseHandler}
				onAddExpense={addExpenseHandler}
				items={realData}
				setRealData={setRealData}
				year={year}
				setYear={setYear}
				onYearChange={handleYearChange}
			/>
			<Expenses
				items={realData}
				setRealData={setRealData}
				year={year}
				setYear={setYear}
			/>
		</MyProvider>
	);
}

export default App;
