import React, { useEffect, useContext } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getInfo()
	}, [])

	return (
		<div className="bg-dark py-3">
			<div className="container col-12">

				<h1 className="text-warning">Characters</h1>
				<div className="row flex-nowrap gap-2 mb-4 overflow-x-auto">
					{store.characters.results?.map((item) => {
						return (
							<Card index={item.uid} name={item.name} category='characters' />
						)
					})}
				</div>

				<h1 className="text-warning">Planets</h1>
				<div className="row flex-nowrap gap-2 mb-4 overflow-x-auto">
					{store.planets.results?.map((item) => {
						return (
							<Card index={item.uid} name={item.name} category='planets' />
						)
					})}
				</div>

				<h1 className="text-warning">Vehicles</h1>
				<div className="row flex-nowrap gap-2 mb-4 overflow-x-auto">
					{store.vehicles.results?.map((item) => {
						return (
							<Card index={item.uid} name={item.name} category='vehicles' />
						)
					})}
				</div>
			</div>
		</div >
	)
};
