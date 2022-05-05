import React from "react";
import Header from "../components/shared/header.component";
import Dashboard from "../containers/dashboard.container";
import Signup from "./signup.container";

const Main = ({ isUserEmpty }) => {

	const renderInitialView = () => {
		return isUserEmpty ? <Signup /> : <Dashboard />;
	};

	return (
		<div className="content">
			<Header />
			{renderInitialView()}
		</div>
	);
};

export default Main;
