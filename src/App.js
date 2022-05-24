import { useEffect, useState } from "react";
import csvFile from "./u20advancedstats.csv";
import Papa from "papaparse";
import { Table, Tag } from "antd";
import "antd/dist/antd.css";
import ChartDisplay from "./ChartDisplay";

let data = {
	options: {
		chart: {
			id: "basic-bar",
		},
		xaxis: {
			categories: [2000, 2010, 2020, 2030, 2040, 2050, 2060, 2070],
		},
	},
	series: [
		{
			name: "series-1",
			data: [10, 52, 53, 4, 55, 65, 86, 74, 12],
		},
	],
};

function App() {
	const [titles, setTitles] = useState();
	const [rows, setRows] = useState();

	useEffect(() => {
		Papa.parse(csvFile, {
			download: true,
			header: true,
			complete: function (input) {
				let records = input.data;

				setRows(records);
			},
		});
	}, []);

	useEffect(() => {
		// console.log(eachRow);
		if (!rows) {
			return;
		}
		let titles = Object.keys(rows[0]).map((title, index) => {
			// let test = Object.values(records[index]);
			// console.log(records[index][title]);
			return {
				title: title,
				dataIndex: title,

				filters: rows.map((record, i) => {
					// console.log(record[title]);
					//make sense, I am getting the name of each

					return {
						text: record[title],
						value: record[title],
					};
				}),

				onFilter: (value, record) => {
					console.log(value);
					console.log(record);
					console.log(record[title]);
					return record[title] === value;
				}, // todo PROBLEM HERE

				// onFilter: (value, record) => {
				// 	// record: is one line from the DB

				// 	// value: is the value I am filtering by
				// 	console.log("onFilter");
				// 	console.log(record[title], "HERE");
				// },
				// sorter: (record1, record2) => {
				// 	const isString = typeof record1[title] === "string";
				// 	// todo deal better with a case of "1": try to parse the string to an int, and then sort it like an int.
				// 	if (isString) {
				// 		return record1[title].length - record2[title].length;
				// 	} else {
				// 		return record1[title] - record2[title];
				// 	}
				// },
			};
		});

		console.log(titles);

		setTitles(titles);
	}, [rows]);

	return (
		<>
			<Table columns={titles} dataSource={rows} />
			<ChartDisplay series={data.series} options={data.options} />
		</>
	);
}

export default App;
