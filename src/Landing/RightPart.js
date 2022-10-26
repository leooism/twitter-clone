import React, { useState, useEffect } from "react";
import "./RightPart.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
function RightPart() {
	const [{}, dispatch] = useStateValue();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () =>
		auth
			.signInWithPopup(provider)
			.then(function (result) {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch(function (error) {
				alert(error);
			});

	return (
		<div className="RightPart">
			<div className="RightPart__UserField">
				<div className="username">
					<label htmlFor="email">Username</label>
					<input
						value={email}
						id="email"
						type="text"
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="password">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<a href="Forgot Password">Forgot Password ? </a>
				</div>
				<div className="Button">
					<button className="submit" onClick={signIn}>
						Login
					</button>
				</div>
			</div>

			<div className="description">
				<div className="Description__box">
					<div className="logo">
						<i class="fas fa-twitter"></i>
					</div>
					<div className="heading">
						<h1>See What's happening in the world right now</h1>
					</div>
					<div className="form">
						<div>
							<h5>Join Twitter Today</h5>
						</div>
						<div className="signup">
							<button>Sign up</button>
						</div>

						<div className="login">
							<button onClick={signIn}>Sign in with Google</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RightPart;
