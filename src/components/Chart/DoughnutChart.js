import React from 'react';
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import './ChartDoughnut.css'

const DoughnutChart = (props) => {

	// 카테고리별 합계 금액을 저장할 객체 생성
	const categoryTotalAmounts = {};
	// expenses 배열을 순회하며 카테고리별 합계 금액 계산
	props.expenses.forEach((expense)=>{
		const category = expense.category;
		if(!categoryTotalAmounts[category]){
			categoryTotalAmounts[category] = 0;
		}
		categoryTotalAmounts[category] += expense.amount
	})
	console.log(categoryTotalAmounts);

	// 객체에서 key와 value만 추출
	const key = Object.keys(categoryTotalAmounts);
	const value = Object.values(categoryTotalAmounts);
	console.log(key, value);

	const data = {
		labels: key,
		datasets: [
			{
				data: value,
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)'
				]
			},
		],
	};

	return <Doughnut className="custom-doughnut-chart" data={data} />;
};

export default DoughnutChart;
