import React, {useState} from "react";
import Chart from "../Chart/Chart";
import DoughnutChart from "../Chart/DoughnutChart";
import './ExpenseChart.css';
const ExpenseChart = (props) => {
	const [chartType1, setChartType1] = useState(true);
	const [chartType2, setChartType2] = useState(false);

	const toggleLayout = (layoutNumber) => {
		if (layoutNumber === 1) {
			setChartType1(true);
			setChartType2(false);
		} else if (layoutNumber === 2) {
			setChartType1(false);
			setChartType2(true);
		}
	};

	const chartDataPoints = [
		{ label: 'Jan', value: 0, total: 0 },
		{ label: 'Feb', value: 0, total: 0 },
		{ label: 'Mar', value: 0, total: 0 },
		{ label: 'Apr', value: 0, total: 0 },
		{ label: 'May', value: 0, total: 0 },
		{ label: 'Jun', value: 0, total: 0 },
		{ label: 'Jul', value: 0, total: 0 },
		{ label: 'Aug', value: 0, total: 0 },
		{ label: 'Sep', value: 0, total: 0 },
		{ label: 'Oct', value: 0, total: 0 },
		{ label: 'Nov', value: 0, total: 0 },
		{ label: 'Dec', value: 0, total: 0 }
	];

	for(const expense of props.expenses) {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
		// console.log(expenseMonth, chartDataPoints[expenseMonth]);
	}

	return (
		<div>
			<div className="expense__chart-btn">
				<button onClick={()=>toggleLayout(1)}>bar chart</button>
				<button onClick={()=>toggleLayout(2)}>doughnut chart</button>
			</div>
			{chartType1 && <Chart expenses={props.expenses} dataPoints={chartDataPoints} />}
			{chartType2 && <DoughnutChart expenses={props.expenses} />}
		</div>
	)
}
export default ExpenseChart;