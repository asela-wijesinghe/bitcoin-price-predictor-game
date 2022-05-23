import { useMutation } from "@apollo/client";
import { Button } from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { UPDATE_SCORE } from "../apis/score.api";

const Predict = ({ score, user, setScoreChanged }) => {
	const COUNTER_DEFAULT = 10;
	const [counter, setCounter] = useState(COUNTER_DEFAULT);
	const [currentPrice, setCurrentPrice] = useState(0);
	const [guessResult, setGuessResult] = useState(null);
	const [guess, setGuess] = useState(null);
	const [oldPrice, setOldPrice] = useState(0);
	const [waitingExtra, setWaitingExtra] = useState(false);
	const [updateScore, { data, loading, error }] = useMutation(UPDATE_SCORE);
	const ws = useRef(null);
	const [wsConnectionStatus, setWSConnectionStatus] = useState(false);

	useEffect(() => {
		ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
		ws.current.onopen = () => {
			setWSConnectionStatus(true);
		};
	}, []);

	useEffect(() => {
		if (!wsConnectionStatus) {
			return;
		}

		let msg = {
			type: "subscribe",
			product_ids: ["BTC-USD"],
			channels: ["ticker"],
		};
		let jsonMsg = JSON.stringify(msg);
		ws.current.send(jsonMsg);
		ws.current.onmessage = (e) => {
			let data = JSON.parse(e.data);
			if (data.type !== "ticker") {
				return;
			}
			setCurrentPrice(data.price);
		};
	}, [wsConnectionStatus]);

	useEffect(() => {
		guess && counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

		guess && counter === 0 && requestNewPrice();
	}, [guess, counter]);

	const renderGuessResults = () => {
		if (guess && !waitingExtra) {
			return (
				<p>
					When at the price of <b>${oldPrice}</b> you guessed the price would go{" "}
					<b>{guess}</b>. <br /> Lets wait {counter} seconds to find out!
				</p>
			);
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
						onClick={() => {
							setGuess("DOWN");
							setOldPrice(currentPrice);
						}}
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
						onClick={() => {
							setGuess("UP");
							setOldPrice(currentPrice);
						}}
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
			newPrice = currentPrice;
			// process request with new price
			if (newPrice === oldPrice) {
				// wait 60 seconds more
				setWaitingExtra(true);
			} else {
				if (guess === "UP" && newPrice > oldPrice) {
					setGuessResult("SUCCESS");
					newScore++;
				} else if (guess === "UP" && newPrice < oldPrice) {
					newScore--;
					setGuessResult("WRONG");
				} else if (guess === "DOWN" && newPrice > oldPrice) {
					newScore--;
					setGuessResult("WRONG");
				} else if (guess === "DOWN" && newPrice < oldPrice) {
					newScore++;
					setGuessResult("SUCCESS");
				}

				//reset
				setTimeout(() => setGuessResult(null), 1000);
				setOldPrice(0);
				setGuess(null);
				setWaitingExtra(false);

				await updateScore({
					variables: {
						scoreInput: {
							score: newScore,
							user: user,
						},
					},
				});
				setScoreChanged(true);
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
