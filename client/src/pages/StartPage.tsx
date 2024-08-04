import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import one_img from "../assets/1.png"

const StartPage = () => {
	return (
		<div className="startpage_container">
			<Header />
			<div className="startpage_block_one">
				<div className="one_text_container">
					<h1>Enjoy your time management with new daily planner</h1>
					<br></br>
					Many people nowadays struggle with remembering all the complex tasks
					throughout the day. It's your way to minimize any mess in your daily
					routine. Give it a try!
					<div className="one_button">Get Started</div>
				</div>
				<img src={one_img} alt="one_img" className="one_img" />
			</div>
			<div className="startpage_block_two"></div>
			<div className="startpage_block_three"></div>
			<Footer />
		</div>
	);
};

export default StartPage;
