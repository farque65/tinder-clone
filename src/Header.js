import React from 'react'
import "./Header.css";
import bengaliSupreme from'./bengaliSupreme.jpg';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton"
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
	const history = useHistory();
	return (
		<div>
			<div className="header">
				{backButton ? (
					<IconButton onClick={() => history.replace(backButton)}>
						<ArrowBackIosIcon fontSize="large" className="header__icon"/>
					</IconButton>
				) : (
					<IconButton>
						<PersonIcon fontSize="large" className="header__icon"/>
					</IconButton>
				)}
				<Link to="/">
					<img src={bengaliSupreme} className="header__logo" alt="supreme"/>
				</Link>
				<Link to="/chat">
					<IconButton>
						<ForumIcon fontSize="large" className="header__icon"/>
					</IconButton>
				</Link>
			</div>
		</div>
	)
}

export default Header
