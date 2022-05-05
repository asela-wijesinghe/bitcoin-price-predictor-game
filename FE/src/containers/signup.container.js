import { useMutation } from "@apollo/client";
import { Button, Card, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { SAVE_USER } from "../apis/score.api";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";
import { refreshPage } from "../utils/helper";

const Signup = () => {
	const [name, setName] = useState("");
	const [storedValue, setValue] = useLocalStorage("user");
	const [saveUser, { data, loading, error }] = useMutation(SAVE_USER);

	const createNewSession = () => {
		//call service with data
		setValue(name);
		const newScore = { user: name, score: 0 };
		// TODO need to validate users with unique name check with DB
		saveUser({
			variables: {
				newScore,
			},
		});
		refreshPage();
	};

	if (error) {
		return <p>Something Went Wrong!</p>;
	}

	if (loading) {
		return <p>Starting...</p>;
	} else {
		return (
			<form onSubmit={createNewSession} className="card-container">
				<Card
					className="card animate__animated animate__fadeInUp"
					style={{ padding: "4%", borderRadius: 25 }}
				>
					<h3>Enter your name to start</h3>

					<TextField
						value={name}
						required
						inputProps={{ min: 0, style: { textAlign: "center" } }}
						style={{ borderRadius: 25, margin: "2%" }}
						onChange={(e) => setName(e.target.value)}
					/>
					<Button
						type="submit"
						variant="contained"
						style={{ borderRadius: 25, margin: "2%" }}
						color="primary"
					>
						Start
					</Button>
				</Card>
			</form>
		);
	}
};

export default Signup;
