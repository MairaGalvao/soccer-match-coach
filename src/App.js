import { useEffect, useState } from "react";
import csvFile from "./u20advancedstats.csv";
import Papa from "papaparse";
import { Table, Tag } from "antd";
import "antd/dist/antd.css";
import ChartDisplay from "./ChartDisplay";

function App() {
	const [titles, setTitles] = useState();
	const [rows, setRows] = useState(); // THE OBJECT WITH ALL KEYS AND VALUES
	const [playerName, setPlayerName] = useState();
	const [freeKicks, setFreeKicks] = useState();

	// console.log(rows, "MY ROWS");
	// console.log(titles, "MY TITLES");

	// console.log(rows[titles], "MY TITLES.athelete");

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
		if (!rows) {
			return;
		}

		// let value = Object.values(rows[0]);
		// setPlayerName(value[0]);

		let titles = Object.keys(rows[0]).map((title, index) => {
			return {
				title: title,
				dataIndex: title,
				filters: rows.map((record, i) => {
					return {
						text: record[title],
						value: record[title],
					};
				}),

				onFilter: (value, record) => {
					//value is the name of the playwers
					// console.log(value);

					setPlayerName(value);
					// console.log(value, "my value");
					// console.log(record.FK, "my record");
					let FreeKicksNumber = parseInt(record.FK);
					let myNumber = parseFloat(FreeKicksNumber);
					console.log(myNumber); //NAM
					console.log(typeof myNumber, "my freekick type");
					// console.log(freeKicks);
					setFreeKicks(myNumber);

					return record[title] === value;
				},
			};
		});
		setTitles(titles);
	}, [rows]);

	let data = {
		options: {
			chart: {
				id: "basic-bar",
			},
			xaxis: {
				categories: [playerName],
			},
		},
		series: [
			{
				name: "series-1",
				data: [freeKicks],
			},
		],
	};
	// console.log(freeKicks);
	return (
		<>
			<Table columns={titles} dataSource={rows} />

			<ChartDisplay
				series={data.series}
				options={data.options}
				// playerName={data.playerName}
			/>
		</>
	);
}

export default App;
