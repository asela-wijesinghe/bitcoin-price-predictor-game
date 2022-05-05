import { Button } from "@material-ui/core";
import React from "react";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";

const Predict = ({ loading }) => {
	const [storedValue, setValue] = useLocalStorage("user");

	if (loading) {
		return <p>loading...</p>;
	} else {
		return (
			<div className="card-container">
				<div>
					<h1 style={{ marginBottom: 0 }}>$41,000</h1>
					<p style={{ marginTop: 10 }}>BTC/USD</p>
				</div>

				<h2>Guess What will happen to the Bitcoin price in next 60 Seconds?</h2>

				<div style={{ display: "flex", flexDirection: "row" }}>
					<Button
						style={{ borderRadius: 25, margin: "2%" }}
						variant="outlined"
						// onClick={exitGame}
					>
						Going Up
					</Button>
					<Button
						variant="outlined"
						style={{ borderRadius: 25, margin: "2%" }}
						// onClick={exitGame}
					>
						Going Down
					</Button>
				</div>
			</div>
		);
	}
};

export default Predict;
