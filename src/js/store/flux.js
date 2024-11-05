const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [{}],
			planets: [{}],
			vehicles: [{}],
			imagesURL: 'https://starwars-visualguide.com/assets/img/',
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
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
		}
	};
};

export default getState;
