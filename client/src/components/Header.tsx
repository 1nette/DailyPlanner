import React from "react";
import logo from "../assets/calendar.png"

const Header = () => {
	return (
		<div className="header_container">
			<div className="header_logo_container">
				<img src={logo} alt="logo"/>
				Daily Planner
			</div>
			<div className="header_buttons_container">
				<div className="header_button_start">
					Get Started
				</div>
			</div>
		</div>
	);
};

export default Header;
