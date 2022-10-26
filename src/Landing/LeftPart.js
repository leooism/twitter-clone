import React from "react";
import "./LeftPart.css";

function LeftPart() {
	return (
		<div className="LeftPart">
			<div className="LeftPart__box">
				<div className="LeftPart__box__features">
					<i class="fas fa-search"></i> <span>Follow your interests.</span>
				</div>
				<div className="LeftPart__box__features">
					<i className="fas fa-people"></i>{" "}
					<span>Hear What people are talking about</span>
				</div>
				<div className="LeftPart__box__features">
					<i className="fas fa-message"></i> <span>Join the conversation</span>
				</div>
			</div>
		</div>
	);
}

export default LeftPart;
