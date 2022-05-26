import { useEffect, useState } from "react";
import csvFile from "./u20advancedstats.csv";
import Papa from "papaparse";
import "antd/dist/antd.css";
import ChartDisplay from "./ChartDisplay";
import Field from "./Field";
import * as ANTD from "antd";

function App() {
	const [titles, setTitles] = useState();
	const [rows, setRows] = useState(); // THE OBJECT WITH ALL KEYS AND VALUES
	const [playerName, setPlayerName] = useState([]);
	const [freeKicks, setFreeKicks] = useState();
	const [displayField, setDisplayField] = useState(false);

	const [displayGraph, setDisplayGraph] = useState(true);

	const [displayData, setDisplayData] = useState(true);

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
					console.log([value], "here is one "); //so, it is consoling both picked, but not setting up in the state
					console.log(typeof value);
					var playwersNameArray = [];

					// //todo fix this code to be able to see both strings in one array
					playwersNameArray.push(value);
					console.log(playwersNameArray, "MY ARRAY");
					// console.log(typeof playwersNameArray);

					setPlayerName(value);
					// console.log(value, "my value");
					// console.log(record.FK, "my record");
					//todo add all the names picked in the filter in the graph (now it is only able to show one)
					//todo fix - number of free kick cant display as it is nan
					let FreeKicksNumber = parseInt(record.FK);
					let myNumber = parseFloat(FreeKicksNumber);
					// console.log(myNumber); //NAM
					// console.log(typeof myNumber, "my freekick type");
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
			<ANTD.Button
				shape="round"
				size="large"
				type="primary"
				onClick={() => {
					setDisplayField(true);
				}}
			>
				An image of the soccer field can be found here
			</ANTD.Button>

			<ANTD.Table columns={titles} dataSource={rows} />

			<ChartDisplay
				series={data.series}
				options={data.options}
				// playerName={data.playerName}
			/>

			{displayField && <Field />}

			{/* {displayField && <Field />} */}
		</>
	);
}

export default App;
