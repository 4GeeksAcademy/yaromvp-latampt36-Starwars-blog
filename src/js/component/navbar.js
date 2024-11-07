import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-black px-2">
			<div className="container">
				<Link to="/">
					<img src={starwars} alt="Bootstrap" height="38" />
				</Link>
				<div className="dropdown">
					<button className="btn btn-outline-warning btn-lg dropdown-toggle"
						type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end bg-secondary">
						<li><button className="dropdown-item text-center bg-secondary text-light" type="button">(empty)</button></li>
						{store.favorites.map((item) => {
							<li>
								<button className="dropdown-item text-center bg-dark text-light" type="button">
									{item.category == 'characters'
										? <li><button className="dropdown-item text-center bg-dark text-light" type="button">{store.characters.results?.name} <FontAwesomeIcon icon={faTrashCan} /></button></li>
										: item.category == 'planets'
											? <li><button className="dropdown-item text-center bg-dark text-light" type="button">(empty)</button></li>
											: item.category == 'vehicles'
												? <li><button className="dropdown-item text-center bg-dark text-light" type="button">(empty)</button></li>
												: null}
								</button>
							</li>
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
