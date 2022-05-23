import { useLazyQuery } from "@apollo/client";
import { Button, Card, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { GET_ALL_SCORES, GET_SCORE } from "../apis/score.api";
import Predict from "../components/predict.component.js";
import Table from "../components/table.component";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";
import { refreshPage } from "../utils/helper";

const Dashboard = () => {
	const [storedValue] = useLocalStorage("user");
	const [showTable, setShowTable] = useState(false);
	const [scoreChanged, setScoreChanged] = useState(true);

	//get user scores
	const [getNewScores, { loading: loadingScore, error, data }] = useLazyQuery(
		GET_SCORE,
		{
			variables: {
				user: storedValue,
			},
		}
	);

	useEffect(() => {
		if (scoreChanged) {
			getNewScores();
			getAllScores();
			setScoreChanged(false);
		}
	}, [scoreChanged]);

	//get user scores
	const [
		getAllScores,
		{ loading: loadingTable, error: tableError, data: tableData },
	] = useLazyQuery(GET_ALL_SCORES);

	const exitGame = () => {
		window.localStorage.removeItem("user");
		refreshPage();
	};

	if (loadingScore) {
		return <p>loading...</p>;
	} else {
		return (
			<div className="card-container">
				<Modal open={showTable} onClose={() => setShowTable(false)}>
					<Table data={tableData && tableData.getAllScores} />
				</Modal>
				<Card
					className="card animate__animated animate__fadeInUp"
					style={{ padding: "4%", borderRadius: 25 }}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							backgroundColor: "#ddd",
							borderRadius: 15,
							padding: "0 2% 0 4%",
							alignItems: "center",
						}}
					>
						<h2>
							{data && data.getScore.user}:{" "}
							<span>{data && data.getScore.score} Points</span>
						</h2>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Button
								variant="outlined"
								style={{
									borderRadius: 25,
									margin: "2%",
								}}
								onClick={() => setShowTable(true)}
							>
								Leaderboard
							</Button>
							<Button
								variant="contained"
								style={{
									borderRadius: 25,
									margin: "2%",
									backgroundColor: "#e06666",
								}}
								color="secondary"
								onClick={exitGame}
							>
								Exit
							</Button>
						</div>
					</div>
					<div>
						<Predict
							setScoreChanged={setScoreChanged}
							score={data && data.getScore.score}
							user={data && data.getScore.user}
						/>
					</div>
				</Card>
			</div>
		);
	}
};

export default Dashboard;
