import { useEffect, useState } from "react";
import csvFile from "./u20advancedstats.csv";
import Papa from "papaparse";
import { Table } from "antd";
import "antd/dist/antd.css";

function Test() {
	const columns = [
		{
			title: "dsdas",
			dataIndex: "name",
			filters: [
				{
					text: "Joe",
					value: "Joe",
				},
				{
					text: "Jim",
					value: "Jim",
				},
			],
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			onFilter: (value, record) => record.name.indexOf(value) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
		},
		{
			title: "Age",
			dataIndex: "age",
			defaultSortOrder: "descend",
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: "Address",
			dataIndex: "address",
			filters: [
				{
					text: "London",
					value: "London",
				},
				{
					text: "New York",
					value: "New York",
				},
			],
			filterMultiple: false,
			onFilter: (value, record) => record.address.indexOf(value) === 0,
			sorter: (a, b) => a.address.length - b.address.length,
		},
	];

	const data = [
		{
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
		},
		{
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
		},
		{
			name: "Joe Black",
			age: 32,
			address: "Sidney No. 1 Lake Park",
		},
		{
			name: "Jim Red",
			age: 32,
			address: "London No. 2 Lake Park",
		},
	];

	function onChange(pagination, filters, sorter) {
		console.log("params", pagination, filters, sorter);
	}

	return (
		<>
			<Table columns={columns} dataSource={data} onChange={onChange} />,
		</>
	);
}

export default Test;
