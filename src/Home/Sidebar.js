import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { IconButton, Avatar } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import PersonIcon from "@material-ui/icons/Person";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/List";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExploreIcon from "@material-ui/icons/Explore";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useStateValue } from "../StateProvider";
function Sidebar() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="Sidebar">
			<div className="Sidebar__Body">
				<div className="sidebar__logo">
					<IconButton>
						<TwitterIcon />
					</IconButton>
				</div>
				<div className="sidebar__navigation">
					<div className="nav">
						<IconButton>
							<TwitterIcon />
						</IconButton>
						<p>Home</p>
					</div>
					<div className="nav">
						<IconButton>
							<ExploreIcon />
						</IconButton>
						<p>Explore</p>
					</div>

					<div className="nav">
						<IconButton>
							<MailOutlineIcon />
						</IconButton>
						<p>Message</p>
					</div>
					<div className="nav">
						<IconButton>
							<BookmarkBorderIcon />
						</IconButton>
						<p>Bookmarks</p>
					</div>
					<div className="nav">
						<IconButton>
							<ListIcon />
						</IconButton>
						<p>Lists</p>
					</div>
					<div className="nav">
						<IconButton>
							<PersonIcon />
						</IconButton>
						<p>Profile</p>
					</div>
					<div className="nav">
						<IconButton>
							<MoreHorizIcon />
						</IconButton>
						<p>More</p>
					</div>
				</div>
				<div className="Sidebar__Tweet">
					<button>Tweet</button>
				</div>
				<div className="Sidebar__User">
					<Avatar src={user.photoURL} />
					<div className="user">
						<h5>{user.displayName}</h5>
						<h5>@{user.displayName}</h5>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
