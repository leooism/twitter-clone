import React from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Love() {
	const id = useParams();
	console.log(id);
	return <span> 0 </span>;
}

export default Love;
