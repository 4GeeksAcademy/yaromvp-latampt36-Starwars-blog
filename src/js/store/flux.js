const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [{}],
			planets: [{}],
			vehicles: [{}],
			detailInfo: {},
			imagesURL: 'https://starwars-visualguide.com/assets/img/',
			favorites: [],
			firstLoad: true
		},
		actions: {
			// Use getActions to call a function within a fuction
			getInfo: async () => {
				try {//Get People
					const response = await fetch('https://www.swapi.tech/api/people')
					if (response.status != 200) {
						throw new Error('Error en la solicitud...')
					}
					const peolpeData = await response.json()
					const updatedResults = peolpeData.results.map(character => ({
						...character,
						isFav: false
					}));
					setStore({
						characters: {
							...peolpeData,
							results: updatedResults
						}
					});
				} catch (error) {
					console.log(error)
				}
				try {//Get Planets
					const response = await fetch('https://www.swapi.tech/api/planets')
					if (response.status != 200) {
						throw new Error('Error en la solicitud...')
					}
					const planetsData = await response.json()
					const updatedResults = planetsData.results.map(character => ({
						...character,
						isFav: false
					}));
					setStore({
						planets: {
							...planetsData,
							results: updatedResults
						}
					});
				} catch (error) {
					console.log(error)
				}
				try {//Get Vehicles
					const response = await fetch('https://www.swapi.tech/api/vehicles')
					if (response.status != 200) {
						throw new Error('Error en la solicitud...')
					}
					const vehiclesData = await response.json()
					const updatedResults = vehiclesData.results.map(character => ({
						...character,
						isFav: false
					}));
					setStore({
						vehicles: {
							...vehiclesData,
							results: updatedResults
						}
					});
				} catch (error) {
					console.log(error)
				}
			},
			getDetail: async (id, category) => {
				try {//Get the details of a character, planet or vehicle
					const response = await fetch(`https://www.swapi.tech/api/${category}/${id}`)
					if (response.status != 200) {
						throw new Error('Error en la solicitud...')
					}
					const detailData = await response.json()
					setStore({
						detailInfo: detailData
					})
				} catch (error) {
					console.log(error)
				}
			},
			addFav: (id, category, name) => {
				const store = getStore();
				const updatedFavs = [...store.favorites, { id, category, name }];

				if (category === 'characters') {
					const updatedResults = store.characters.results.map(character => ({
						...character,
						isFav: character.uid === id || character.isFav
					}));
					setStore({
						favorites: updatedFavs,
						characters: {
							...store.characters,
							results: updatedResults
						}
					});
				}
				if (category === 'planets') {
					const updatedResults = store.planets.results.map(planet => ({
						...planet,
						isFav: planet.uid === id || planet.isFav
					}));
					setStore({
						favorites: updatedFavs,
						planets: {
							...store.planets,
							results: updatedResults
						}
					});
				}
				if (category === 'vehicles') {
					const updatedResults = store.vehicles.results.map(vehicle => ({
						...vehicle,
						isFav: vehicle.uid === id || vehicle.isFav
					}));
					setStore({
						favorites: updatedFavs,
						vehicles: {
							...store.vehicles,
							results: updatedResults
						}
					});
				}
			},
			deleteFav: (id, category) => {
				const store = getStore();
				const updatedFavs = store.favorites.filter(
					fav => !(fav.id === id && fav.category === category)
				);
				if (category === 'characters') {
					const updatedResults = store.characters.results.map(character => {
						if (character.uid === id) {
							return {
								...character,
								isFav: false
							};
						}
						return character;
					});
					setStore({
						favorites: updatedFavs,
						characters: {
							...store.characters,
							results: updatedResults
						}
					});
				}
				if (category === 'planets') {
					const updatedResults = store.planets.results.map(planet => {
						if (planet.uid === id) {
							return {
								...planet,
								isFav: false
							};
						}
						return planet;
					});
					setStore({
						favorites: updatedFavs,
						planets: {
							...store.planets,
							results: updatedResults
						}
					});
				}
				if (category === 'vehicles') {
					const updatedResults = store.vehicles.results.map(vehicle => {
						if (vehicle.uid === id) {
							return {
								...vehicle,
								isFav: false
							};
						}
						return vehicle;
					});
					setStore({
						favorites: updatedFavs,
						vehicles: {
							...store.vehicles,
							results: updatedResults
						}
					});
				}
			},
			changeFirstLoad: () => {
				setStore({
					firstLoad: false
				})
			}
		}
	};
};

export default getState;
