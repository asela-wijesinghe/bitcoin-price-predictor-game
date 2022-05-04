import { Button, Card, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useLocalStorage } from "../services/useLocalStorage";
import {refreshPage} from "../utils/helper"

const Signup = ({ loading }) => {
	const [name, setName] = useState("");
	const [storedValue, setValue] = useLocalStorage("user");

	const createNewSession = () => {
		//call service with data
		setValue(name);
		refreshPage();
	};



	if (loading) {
		return <p>loading...</p>;
	} else {
		return (
			<div className="card-container">
				<Card
					className="card animate__animated animate__fadeInUp"
					style={{ padding: "4%", borderRadius: 25 }}
				>
					<h3>Enter your name to start</h3>

					<TextField
						value={name}
						inputProps={{ min: 0, style: { textAlign: "center" } }}
						style={{ borderRadius: 25, margin: "2%" }}
						onChange={(e) => setName(e.target.value)}
					/>
					<Button
						variant="contained"
						style={{ borderRadius: 25, margin: "2%" }}
						color="primary"
						onClick={createNewSession}
					>
						Signup
					</Button>
				</Card>
			</div>
		);
	}
};

export default Signup;
