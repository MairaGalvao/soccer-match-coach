//todo PART2

import "./Field.css";
import * as ANTD from "antd";
import { useState, useEffect } from "react";

import { Typography } from "antd";
const { Title } = Typography;
export default function Field() {
	const [players, setPlayers] = useState({
		player1: "Golly",
		player2: "P2",
		player3: "P3",
		player4: "P4",
		player5: "P5",
		player6: "P6",
		player7: "P7",
		player8: "P8",
		player9: "P9",
		player10: "P10",
		player11: "P11",
	});

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

				<ANTD.Layout class="home-team">
					<Title level={2}>Brazil</Title>
					<ANTD.Layout class="player one">{players.player1}</ANTD.Layout>
					<ANTD.Layout class="player two">{players.player2}</ANTD.Layout>
					<ANTD.Layout class="player three">{players.player3}</ANTD.Layout>
					<ANTD.Layout class="player four">{players.player4}</ANTD.Layout>
					<ANTD.Layout class="player five">{players.player5}</ANTD.Layout>
					<ANTD.Layout class="player six">{players.player6}</ANTD.Layout>
					<ANTD.Layout class="player seven">{players.player7}</ANTD.Layout>
					<ANTD.Layout class="player eight">{players.player8}</ANTD.Layout>
					<ANTD.Layout class="player nine">{players.player9}</ANTD.Layout>
					<ANTD.Layout class="player ten">{players.player10}</ANTD.Layout>
					<ANTD.Layout class="player eleven">{players.player11}</ANTD.Layout>
				</ANTD.Layout>

				<ANTD.Layout class="visitor-team">
					<Title level={2}>Israel</Title>
					<ANTD.Layout class="player one">{players.player1}</ANTD.Layout>
					<ANTD.Layout class="player two">{players.player2}</ANTD.Layout>
					<ANTD.Layout class="player three">{players.player3}</ANTD.Layout>
					<ANTD.Layout class="player four">{players.player4}</ANTD.Layout>
					<ANTD.Layout class="player five">{players.player5}</ANTD.Layout>
					<ANTD.Layout class="player six">{players.player6}</ANTD.Layout>
					<ANTD.Layout class="player seven">{players.player7}</ANTD.Layout>
					<ANTD.Layout class="player eight">{players.player8}</ANTD.Layout>
					<ANTD.Layout class="player nine">{players.player9}</ANTD.Layout>
					<ANTD.Layout class="player ten">{players.player10}</ANTD.Layout>
					<ANTD.Layout class="player eleven">{players.player11}</ANTD.Layout>
				</ANTD.Layout>
			</ANTD.Layout>
		</>
	);
}
