import React from "react";
import { Routes, Route } from "react-router";
import StartPage from "./pages/StartPage";
import "./App.css";

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<StartPage />} />
			</Routes>
		</div>
	);
};

export default App;
