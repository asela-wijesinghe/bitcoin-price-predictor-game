import React from "react";
import Header from "../components/shared/header.component";
import Dashboard from "../containers/dashboard.container";
import Signup from "./signup.container";

const Main = ({ isUserEmpty, data, loading }) => (
	<div className="content">
		<Header />
		{isUserEmpty ? (
			<Signup loading={loading} />
		) : (
			<Dashboard data={data} loading={loading} />
		)}
	</div>
);

export default Main;
