import React from "react";
import "./App.css";
import Land from "./Landing/LandingPage.js";
import Home from "./Home/Home";
import { useStateValue } from "./StateProvider";

function App() {
	const [{ user }, dispatch] = useStateValue();
	return user ? (
		<div className="App">
			<Home />
		</div>
	) : (
		<div className="App">
			<Land />
		</div>
	);
}

export default App;
