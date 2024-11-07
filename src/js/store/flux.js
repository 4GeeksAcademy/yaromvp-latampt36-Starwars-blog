const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [{}],
			planets: [{}],
			vehicles: [{}],
			detailInfo: {},
			imagesURL: 'https://starwars-visualguide.com/assets/img/',
			favorites: [],
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
					setStore({
						characters: peolpeData
					})
				} catch (error) {
					console.log(error)
				}
				try {//Get Planets
					const response = await fetch('https://www.swapi.tech/api/planets')
					if (response.status != 200) {
						throw new Error('Error en la solicitud...')
					}
					const planetsData = await response.json()
					setStore({
						planets: planetsData
					})
				} catch (error) {
					console.log(error)
				}
				try {//Get Vehicles
					const response = await fetch('https://www.swapi.tech/api/vehicles')
					if (response.status != 200) {
						throw new Error('Error en la solicitud...')
					}
					const vehicleData = await response.json()
					setStore({
						vehicles: vehicleData
					})
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
			addFav: (id, category) => {
				setStore(prevStore => ({
					...prevStore,
					favorites: [...prevStore.favorites, { id: id, category: category }]
				}))
			},
		}
	};
};

export default getState;
