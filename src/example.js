import logo from "./logo.svg";
import "./App.css";
import * as xlsx from "xlsx";
import React, { useState } from "react";

function App() {
	const [excel, setExcel] = useState([]);

	const readUploadFile = (e) => {
		console.log(e);
		e.preventDefault();
		if (e.target.files) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = e.target.result;
				const workbook = xlsx.read(data, { type: "array" });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];

				const json = xlsx.utils.sheet_to_json(worksheet);
				setExcel(json.name);
				console.log(json[0].name);
			};
			reader.readAsArrayBuffer(e.target.files[0]);
		}
	};
	if (excel == !undefined) {
		console.log(excel, "my excel now");
	}

	return (
		<>
			<form>
				<label htmlFor="upload">Upload File</label>
				<input
					type="file"
					name="upload"
					id="upload"
					onChange={readUploadFile}
				/>
			</form>

			{excel && <h1>{excel}</h1>}
		</>
	);
}

export default App;
