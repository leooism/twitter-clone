import React from "react";
import Post from "./Post";
import Sidebar from "./Sidebar";
import "./home.css";
import { useParams, BrowserRouter as Router, Route } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Home() {
	const [{ user }, dispatch] = useStateValue();
	console.log(user);
	return (
		<div className="home">
			<Router>
				<Route path="/">
					<Sidebar />

					<Post />
				</Route>
			</Router>
		</div>
	);
}

export default Home;
