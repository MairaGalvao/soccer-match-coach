import React, { Component } from "react";
import Chart from "react-apexcharts";
import * as ANTD from "antd";

function ChartDisplay({ options, series }) {
	return (
		<ANTD.Layout className="app">
			<ANTD.Layout className="row">
				<ANTD.Layout className="mixed-chart">
					<Chart options={options} series={series} type="bar" width="500" />
				</ANTD.Layout>
			</ANTD.Layout>
		</ANTD.Layout>
	);
}

export default ChartDisplay;
