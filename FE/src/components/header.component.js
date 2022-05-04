import React from "react";
import bitLogo from "../assets/bitcoin.png";

const Header = () => (
	<div className="header-container animate__animated animate__fadeInDown">
		<img src={bitLogo} width="15%" />
		<p className="main-title">
			<span className="Block-title">PRICE</span> PREDICTOR
		</p>
	</div>
);

export default Header;
