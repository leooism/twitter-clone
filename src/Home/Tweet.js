import React /*  { useState, useEffect } */ from "react";
import { Avatar } from "@material-ui/core";
import { Link /* useParams */ } from "react-router-dom";
import "./Tweet.css";
// import db from "../firebase.js";
function Tweet(props) {
	const numLove = props.love;
	console.log(props.userPic);

	console.log(
		new Date(
			parseInt(new Date().getTime()) - parseInt(props.timestamp)
		).toLocaleTimeString()
	);

	// const [isLiked, setisLiked] = useState(false);
	// useEffect(() => {
	// 	return async function b() {
	// 		if (!isLiked) {
	// 			await db
	// 				.collection("tweet")
	// 				.doc(id)
	// 				.update({
	// 					love: numLove + 1,
	// 				});
	// 		} else if (isLiked) {
	// 			await db
	// 				.collection("tweet")
	// 				.doc(id)
	// 				.update({
	// 					love: numLove - 1,
	// 				});
	// 		}
	// 	};
	// }, [id, isLiked, numLove]);
	/* const AddLove = id => {
		return async () => {};
	}; */

	return props.imageUrl !== null ? (
		<div className="Tweet">
			<div className="Tweet__Body">
				<div className="Tweet__header">
					<Avatar src={props.userPic} />
				</div>
				<div className="userStat">
					<div className="userStat__header">
						<div className="head">
							<h4>
								{props.title}
								<span>{new Date(props.timestamp).toUTCString()}</span>
							</h4>
							<i className="fas fa-trash"></i>
						</div>
						<p>@{props.title}</p>
						<div className="status">{props.status}</div>
					</div>
					<div className="userStat__picture">
						<img src={props.imageUrl} alt="Hello" />
					</div>

					<div className="React">
						<p>
							<Link to={`/${props.id}`}>
								<i className="fas fa-heart" /* onClick={AddLove} */></i>
							</Link>
						</p>
						<p>
							<Link to="/home/tweet 	 	">
								<i className="fas fa-comments"></i>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="Tweet">
			<div className="Tweet__Body">
				<div className="Tweet__header">
					<Avatar src={props.userPic} />
				</div>
				<div className="userStat">
					<div className="userStat__header">
						<div className="head">
							<h4>
								{props.title}
								<span>{new Date(props.timestamp).toUTCString()}</span>
							</h4>
							<i className="fas fa-trash"></i>
						</div>

						<p>@{props.title}</p>
					</div>

					<div className="status">
						{props.status}
						<div>
							<div className="React">
								<p>
									<i className="fas fa-heart"></i>
									<span>{numLove}</span>
								</p>

								<p>
									<Link to="/home/tweet">
										<i className="fas fa-comments"></i>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Tweet;
