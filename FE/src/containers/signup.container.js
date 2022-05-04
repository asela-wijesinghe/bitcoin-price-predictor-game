import { Button, Card, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";
import { refreshPage } from "../utils/helper";

const Signup = ({ loading }) => {
	const [name, setName] = useState(null);
	const [storedValue, setValue] = useLocalStorage("user");
	// const { loading, error, data } = useQuery(GET_BTC_PRICE);

	const createNewSession = () => {
		//call service with data
		setValue(name);
		refreshPage();
	};

	if (loading) {
		return <p>loading...</p>;
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
