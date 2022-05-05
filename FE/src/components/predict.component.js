import { useMutation } from "@apollo/client";
import { Button } from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { getBTCPrice } from "../apis/btc.api";
import { UPDATE_SCORE } from "../apis/score.api";
import { refreshPage } from "../utils/helper";

const Predict = ({ score, user }) => {
	const COUNTER_DEFAULT = 60;
	const [counter, setCounter] = useState(COUNTER_DEFAULT);
	const [currentPrice, setCurrentPrice] = useState(0);
	const [guessResult, setGuessResult] = useState(null);
	const [guess, setGuess] = useState(null);
	const [waitingExtra, setWaitingExtra] = useState(false);
	const [updateScore, { data, loading, error }] = useMutation(UPDATE_SCORE);

	useEffect(() => {
		async function fetchInitialData() {
			try {
				const { USD } = await getBTCPrice();
				setCurrentPrice(USD);
			} catch (error) {
				console.log(error);
			}
		}
		fetchInitialData();
	}, []);

	useEffect(() => {
		guess && counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

		guess && counter === 0 && requestNewPrice();
	}, [guess, counter]);

	const renderGuessResults = () => {
		if (guess && !waitingExtra) {
			return <p>Lets wait {counter} seconds to find out!</p>;
		} else if (guess && waitingExtra) {
			return (
				<p>
					Oops! Looks like no price changes yet. Lets wait {counter} seconds
					more to find out!
				</p>
			);
		} else if (guessResult === "SUCCESS") {
			return <h3>Hoorah!🔥 You get +1 Points</h3>;
		} else if (guessResult === "WRONG") {
			return <h3>Bad Luck!😔 You get -1 Points</h3>;
		} else {
			return (
				<div style={{ display: "flex", flexDirection: "row" }}>
					<Button
						startIcon={<ArrowDropDown size="large" />}
						variant="outlined"
						style={{
							borderRadius: 25,
							margin: "2%",
							backgroundColor: "#ffd966",
							minWidth: 100,
						}}
						onClick={() => setGuess("UP")}
					>
						Down
					</Button>
					<Button
						startIcon={<ArrowDropUp size="large" />}
						style={{
							borderRadius: 25,
							margin: "2%",
							backgroundColor: "#93c47d",
							minWidth: 100,
						}}
						variant="outlined"
						onClick={() => setGuess("DOWN")}
					>
						Up
					</Button>
				</div>
			);
		}
	};

	const requestNewPrice = async () => {
		let newScore = score;
		let newPrice = 0;
		try {
			const { USD } = await getBTCPrice();
			newPrice = USD;
			// process request with new price
			if (newPrice === currentPrice) {
				// wait 60 seconds more
				setWaitingExtra(true);
			} else {
				if (guess === "UP" && newPrice > currentPrice) {
					setGuessResult("SUCCESS");
					newScore++;
				} else if (guess === "UP" && newPrice < currentPrice) {
					newScore--;
					setGuessResult("WRONG");
				} else if (guess === "DOWN" && newPrice > currentPrice) {
					newScore--;
					setGuessResult("WRONG");
				} else if (guess === "DOWN" && newPrice < currentPrice) {
					newScore++;
					setGuessResult("SUCCESS");
				}

				setCurrentPrice(newPrice);
				setGuess(null);
				setWaitingExtra(false);
				updateScore({
					variables: {
						scoreInput: {
							score: newScore,
							user: user,
						},
					},
				});
				refreshPage();
			}
			setCounter(COUNTER_DEFAULT);
		} catch (error) {
			console.log(error);
			// set isError and handle the error
		}
	};

	return (
		<div className="card-container">
			<div>
				<h1 style={{ marginBottom: 0 }}>${currentPrice}</h1>
				<p style={{ marginTop: 10 }}>BTC/USD</p>
			</div>

			<h2 style={{ padding: "5%" }}>
				Guess What will happen to the Bitcoin price in next 60 Seconds?
			</h2>
			{renderGuessResults()}
		</div>
	);
};

export default Predict;
