// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import csvFile from "./u20advancedstats.csv";
import Papa from "papaparse";
import { Table } from "antd";

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

				let titles = Object.keys(records[0]).map((str, index) => {
					return {
						title: str,
						dataIndex: str,
					};
				});

				setTitles(titles);
			},
		});
	}, []);

	// const dataRows = [];

	// for (let i = 0; i < 46; i++) {
	// 	dataRows.push({
	// 		key: i,
	// 		name2: `Edward King ${i}`,
	// 		age: 32,
	// 		address: `London, Park Lane no. ${i}`,
	// 	});
	// useEffect(() => {
	// 	if (data) {
	// 		let parsed = [];
	// 		// console.table(data);
	// 		// console.log(data);
	// 		data.map((item) => {
	// 			let name = item[0];
	// 			let obj = { name: name };
	// 			parsed.push(obj);
	// 		});
	// 		// console.log(parsed);
	// 	}
	// }, [data]);
	// const onChange = (pagination, filters, sorter, extra) => {
	// 	console.log("params", pagination, filters, sorter, extra);
	// };
	return (
		<>
			<Table columns={titles} dataSource={rows} />

			{/* <Table rows={rows} columns={columns} />; */}
			{/* <Table dataSource={dataSource} />; */}
			{/* {data && <Table dataSource={data} />} */}
		</>
	);
}

export default App;

// function App() {
// 	const excel_file = document.getElementById("excel_file");

// 	excel_file.addEventListener("change", (event) => {
// 		if (

// 				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
// 				"application/vnd.ms-excel",
// 			].includes(event.target.files[0].type)
// 		) {
// 			document.getElementById("excel_data").innerHTML =
// 				'<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';

// 			excel_file.value = "";

// 			return false;
// 		}

// 		var reader = new FileReader();

// 		reader.readAsArrayBuffer(event.target.files[0]);

// 		reader.onload = function (event) {
// 			var data = new Uint8Array(reader.result);

// 			var work_book = XLSX.read(data, { type: "array" });

// 			var sheet_name = work_book.SheetNames;

// 			var sheet_data = XLSX.utils.sheet_to_json(
// 				work_book.Sheets[sheet_name[0]],
// 				{ header: 1 }
// 			);

// 			if (sheet_data.length > 0) {
// 				var table_output = '<table class="table table-striped table-bordered">';

// 				for (var row = 0; row < sheet_data.length; row++) {
// 					table_output += "<tr>";

// 					for (var cell = 0; cell < sheet_data[row].length; cell++) {
// 						if (row == 0) {
// 							table_output += "<th>" + sheet_data[row][cell] + "</th>";
// 						} else {
// 							table_output += "<td>" + sheet_data[row][cell] + "</td>";
// 						}
// 					}

// 					table_output += "</tr>";
// 				}

// 				table_output += "</table>";

// 				document.querySelector("root").innerHTML = table_output;
// 			}

// 			excel_file.value = "";
// 		};
// 	});
// 	return (
// 		<>
// 			{" "}
// 			<div class="container">
// 				<h2 class="text-center mt-4 mb-4">
// 					Convert Excel to HTML Table using JavaScript
// 				</h2>
// 				<div class="card">
// 					<div class="card-header">
// 						<b>Select Excel File</b>
// 					</div>
// 					<div class="card-body">
// 						<input type="file" id="excel_file" />
// 					</div>
// 				</div>
// 				<div id="excel_data" class="mt-5"></div>
// 			</div>
// 		</>
// 	);
// }

// export default App;
