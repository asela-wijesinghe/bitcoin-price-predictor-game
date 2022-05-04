import { Button, Card } from "@material-ui/core";
import React from "react";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";
import { refreshPage } from "../utils/helper";

const Dashboard = ({ loading }) => {
	const [storedValue, setValue] = useLocalStorage("user");

	const exitGame =()=> {
		window.localStorage.removeItem("user")
		refreshPage();
	}


	if (loading) {
		return <p>loading...</p>;
	} else {
		return (
			<div className="card-container">
				<Card
					className="card animate__animated animate__fadeInUp"
					style={{ padding: "4%", borderRadius: 25 }}
				>
					<h3>{storedValue}</h3>
					<Button
						variant="contained"
						style={{ borderRadius: 25, margin: "2%" }}
						color="secondary"
						onClick={exitGame}
					>
						Exit
					</Button>
				</Card>
			</div>
		);
	}
};

export default Dashboard;
