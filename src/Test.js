// import { Button, Table } from "antd";
// import { useState } from "react";
// import "antd/dist/antd.css";
// import "./index.css";
// const columns = [
// 	{
// 		title: "name",
// 		dataIndex: "name2",
// 	},
// 	{
// 		title: "Age",
// 		dataIndex: "age",
// 	},
// 	{
// 		title: "Address",
// 		dataIndex: "address",
// 	},
// ];
// const data = [];

// for (let i = 0; i < 46; i++) {
// 	data.push({
// 		key: i,
// 		name2: `Edward King ${i}`,
// 		age: 32,
// 		address: `London, Park Lane no. ${i}`,
// 	});
// }

// const Test = () => {
// 	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
// 	const [loading, setLoading] = useState(false);

// 	const start = () => {
// 		setLoading(true); // ajax request after empty completing

// 		setTimeout(() => {
// 			setSelectedRowKeys([]);
// 			setLoading(false);
// 		}, 1000);
// 	};

// 	const onSelectChange = (newSelectedRowKeys) => {
// 		console.log("selectedRowKeys changed: ", selectedRowKeys);
// 		setSelectedRowKeys(newSelectedRowKeys);
// 	};

// 	const rowSelection = {
// 		selectedRowKeys,
// 		onChange: onSelectChange,
// 	};
// 	const hasSelected = selectedRowKeys.length > 0;
// 	return (
// 		<div>
// 			<div
// 				style={{
// 					marginBottom: 16,
// 				}}
// 			>
// 				<Button
// 					type="primary"
// 					onClick={start}
// 					disabled={!hasSelected}
// 					loading={loading}
// 				>
// 					Reload
// 				</Button>
// 				<span
// 					style={{
// 						marginLeft: 8,
// 					}}
// 				>
// 					{hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
// 				</span>
// 			</div>
// 			<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
// 		</div>
// 	);
// };

// export default Test;