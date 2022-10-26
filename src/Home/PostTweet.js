import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Avatar } from "@material-ui/core";

function PostTweet() {
	return (
		<div>
			<Router>
				<Route path="/home/tweet/:id">
					<div className="tweetBox">
						<div className="tweetBox__header">
							<i className="fas fa-exit"></i>
						</div>
						<div className="tweetBox__body">
							<div className="poster">
								<div className="poster__admin">
									<Avatar />
									<Avatar />
								</div>
								<div className="poster__post">
									<div className="poster__postHe">
										<h4>Barcelona</h4>
										<p>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Quisquam, nostrum ad! Ipsum, quis assumenda sit ratione
											provident repudiandae eveniet reiciendis eaque neque
											dolorum, tenetur corporis omnis cupiditate quisquam fugit
											non.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Route>
			</Router>
		</div>
	);
}

export default PostTweet;
