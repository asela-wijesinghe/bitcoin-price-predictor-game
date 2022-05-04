import React from "react";
import Header from "../components/header.component";
import Signup from "../components/signup.component";

const Main = ({ onRowClick, data, loading }) => (
	<div className="content">
		<Header />
		{/* <Table loading={loading} data={data} /> */}
		<Signup />
	</div>
);

export default Main;
