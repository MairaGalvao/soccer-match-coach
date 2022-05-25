import "./Field.css";
// import { Button, Layout } from "antd";
import * as ANTD from "antd";

export default function Field() {
	return (
		<>
			<ANTD.Layout class="pitch">
				<ANTD.Layout class="field left">
					<ANTD.Layout class="penalty-area"></ANTD.Layout>
				</ANTD.Layout>
				<ANTD.Layout class="field right">
					<ANTD.Layout class="penalty-area"></ANTD.Layout>
				</ANTD.Layout>
				<ANTD.Layout class="center-circle"></ANTD.Layout>
				<ANTD.Layout class="home-team"></ANTD.Layout>
				<ANTD.Layout class="visitor-team"></ANTD.Layout>
			</ANTD.Layout>
		</>
	);
}
