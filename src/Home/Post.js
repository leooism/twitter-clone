import React, { useState, useEffect } from "react";
import db from "../firebase";
import { Avatar } from "@material-ui/core";
import "./Post.css";
import Tweet from "./Tweet";
import { useStateValue } from "../StateProvider";
function Post() {
	const [{ user }, dispatch] = useStateValue();

	const [input, setInput] = useState("");
	const [tweet, setTweet] = useState([]);
	const [imageUrl, setImageUrl] = useState("");

	// const [state, setState] = useState(false);
	// const page = 1;
	// const limit = 2;
	// const skip = (page - 1) * limit;

	const SendTweet = async () => {
		await db.collection("tweet").add({
			status: input,
			imageUrl: imageUrl || null,
			timestamp: Date.now(),
			name: user.displayName,
			userPic: user.photoURL,
		});
		setInput("");
		setImageUrl("");
	};
	useEffect(() => {
		async function a() {
			return db.collection("tweet").onSnapshot(snapshot =>
				setTweet(
					snapshot.docs.map(doc => ({
						id: doc.id,
						data: doc.data(),
						date: doc.data().timestamp,
					}))
				)
			);
		}
		a();
	}, []);
	console.log(tweet);
	return (
		<div className="post">
			<div className="post__Header">
				<p>Home</p>
			</div>
			<div className="post__tweetSection">
				<div className="post__Tweet">
					<div className="Avatar">
						<Avatar src={user.photoURL} />
					</div>
					<div className="tweet__input">
						<input
							type="text"
							value={input}
							placeholder="What's happening ?"
							onChange={e => setInput(e.target.value)}
						/>
					</div>
					<div className="imageUrl">
						<input
							type="text"
							value={imageUrl}
							placeholder="Add Image (Optional)"
							onChange={e => setImageUrl(e.target.value)}
						/>
					</div>
				</div>
				<div className="tweet">
					<input type="submit" onClick={SendTweet} />
				</div>
			</div>

			{tweet.map(t => (
				<Tweet
					id={t["id"]}
					status={t["data"]["status"]}
					timestamp={t.date}
					key={Math.random()}
					love={t.data.love}
					imageUrl={t.data.imageUrl}
					title={t.data.name}
					userPic={t.data.userPic}
				/>
			))}
		</div>
	);
}

export default Post;
