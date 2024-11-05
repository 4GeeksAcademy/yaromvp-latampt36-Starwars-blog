import React from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

	//<FontAwesomeIcon icon={faTrashCan} />

	return (
		<nav className="navbar navbar-dark bg-black px-2">
			<div className="container">
				<Link to="/">
					<img src={starwars} alt="Bootstrap" height="38" />
				</Link>
				<div className="dropdown">
					<button className="btn btn-outline-warning btn-lg dropdown-toggle"
						type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge bg-secondary">0</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end bg-dark">
						<li><button className="dropdown-item text-center bg-dark text-light" type="button">(empty)</button></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
