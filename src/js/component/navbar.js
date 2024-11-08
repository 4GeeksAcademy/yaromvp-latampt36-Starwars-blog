import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import starwars from "../../img/starwars-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

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
					<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
						{store.favorites.map((item) => {
							return (
								<li className="d-flex justify-content-between ">
									<button className="btn dropdown-item text-light text-start px-2 py-1" type="button" onClick={() => {
										const found = store.favorites.find((fav) => fav.name == item.name);
										if (found.category == 'characters') {
											actions.getDetail(found.id, 'people')
										} else {
											actions.getDetail(found.id, found.category)
										}
										navigate(`/${found.category}/${found.id}`)
									}}>{item.name} </button>
									<button className="btn text-light d-flex align-items-center icon-link icon-link-hover" type="button" onClick={() => {
										const found = store.favorites.find((fav) => fav.name == item.name);
										actions.deleteFav(found.id, found.category)
									}}>
										<FontAwesomeIcon icon={faTrashCan} />
									</button>
								</li>)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
