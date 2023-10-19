import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";
const Chart = (props) => {
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	const valueMaximum = Math.max(...dataPointValues);
	// console.log(valueMaximum)


	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint, index) => {
				return <ChartBar
						key={dataPoint.label}
						label={dataPoint.label}
						value={dataPoint.value}
						maxValue={valueMaximum}
						totalAmount={dataPointValues[index]}
						/>
			})}
		</div>
	)
}
export default Chart;