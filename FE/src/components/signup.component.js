import { Button, Card, TextField } from "@material-ui/core";
import React from "react";

const Signup = ({ data, loading }) => {
	return (
		<div className="card-container">
			<Card
				className="card animate__animated animate__fadeInUp"
				style={{ padding: "4%", borderRadius: 25 }}
			>
				<h3>Enter your name to start</h3>
				<TextField
					underlineShow={false}
					value={"Foo"}
					inputProps={{ min: 0, style: { textAlign: "center" } }}
					inputStyle={{ color: "white", padding: "0 25px" }}
					style={{ borderRadius: 25, margin: "2%" }}
				/>
				<Button
					variant="contained"
					buttonStyle={{ borderRadius: 25 }}
					style={{ borderRadius: 25, margin: "2%" }}
					color="success"
				>
					Signup
				</Button>
			</Card>
		</div>
	);
};

export default Signup;
