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
					return record[title] === value;
				},
			};
		});

		setTitles(titles);
		let namesArray = rows.map((record) => {
			return record.Athlete;
		});
		let fkArray = rows.map((record) => {
			return record.FK;
		});
		setPlayerName(namesArray);
		setFreeKicks(fkArray);
	}, [rows]);

	let data = {
		options: {
			chart: {
				id: "players-name",
			},
			xaxis: {
				categories: playerName,
			},
		},
		series: [
			{
				name: "Free Kicks",
				data: freeKicks,
			},
			//todo add more relevant statistics for the graph
		],
	};
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

			<ChartDisplay series={data.series} options={data.options} />

			{displayField && <Field />}
		</>
	);
}

export default App;
