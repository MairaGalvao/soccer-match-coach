import React, { Component } from "react";
import Chart from "react-apexcharts";

function ChartDisplay({ options, series }) {
	return (
		<div className="app">
			<div className="row">
				<div className="mixed-chart">
					<Chart options={options} series={series} type="bar" width="500" />
				</div>
			</div>
		</div>
	);
}

export default ChartDisplay;
