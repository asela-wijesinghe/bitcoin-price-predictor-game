import { Card } from "@material-ui/core";
import React from "react";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";

const Predict = ({ loading }) => {
	const [storedValue, setValue] = useLocalStorage("user");

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

					{/* <Button
						variant="contained"
						style={{ borderRadius: 25, margin: "2%" }}
						color="secondary"
					>
						Signup
					</Button>
					<Button
						variant="contained"
						style={{ borderRadius: 25, margin: "2%" }}
						color="secondary"
					>
						Signup
					</Button> */}
				</Card>
			</div>
		);
	}
};

export default Predict;
