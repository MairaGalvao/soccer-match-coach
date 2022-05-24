import { useEffect, useState } from "react";
import csvFile from "./u20advancedstats.csv";
import Papa from "papaparse";
import { Table } from "antd";
import "antd/dist/antd.css";
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
		</>
	);
}

export default App;
