import { useQuery } from "@apollo/client";
import { Button, Card } from "@material-ui/core";
import React from "react";
import { GET_SCORE } from "../apis/score.api";
import Predict from "../components/predict.component.js";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";
import { refreshPage } from "../utils/helper";

const Dashboard = () => {
	const [storedValue] = useLocalStorage("user");

	//get user scores
	const {
		loading: loadingScore,
		error,
		data,
	} = useQuery(GET_SCORE, {
		variables: {
			user: storedValue,
		},
	});

	// const { loading, error, data } = useQuery(GET_BTC_PRICE);
	const exitGame = () => {
		window.localStorage.removeItem("user");
		refreshPage();
	};


	if (loadingScore) {
		return <p>loading...</p>;
	} else {
		return (
			<div className="card-container">
				<Card
					className="card animate__animated animate__fadeInUp"
					style={{ padding: "4%", borderRadius: 25 }}
				>
					<div 		style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#ddd" , borderRadius: 15, padding: "0 2% 0 4%", alignItems: "center" }}>
					<h2 	>{data && data.getScore.user}: <span 	style={{ color: '#f50057' }}>{data && data.getScore.score}</span></h2 >
					{/* {data && data.getScore} */}
					<Button
						variant="contained"
						style={{ borderRadius: 25, margin: "2%" }}
						color="secondary"
						onClick={exitGame}
					>
						Exit
					</Button>
					</div>
					<div>
						<Predict />
					</div>
				</Card>
			</div>
		);
	}
};

export default Dashboard;
