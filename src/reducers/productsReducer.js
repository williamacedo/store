import { GET_ALL_PRODUCTS } from '../types';

const initialState = {
	list:[
		{key: 1, name: 'Strawberry Jam', category: '1', img: 'jam-strawberry', qtd: 1, description: 'Great jam to eat'},
		{key: 2, name: 'Chopp Beer', category: '2', img: 'chopp-puro-malte',  qtd: 1, description: 'Great wine to drink'},
		{key: 3, name: 'Red Wine', category: '3', img: 'red-wine', qtd: 1, description: 'Great wine to drink'},
		{key: 4, name: 'Orange Jam', category: '1', img: 'jam-orange', qtd: 1, description: 'Great jam to eat'},
		{key: 5, name: 'Botle Beer', category: '2', img: 'beer-botle', qtd: 1, description: 'Great beer to drink'},
		{key: 6, name: 'Yellow Wine', category: '3', img: 'yellow-wine', qtd: 1, description: 'Great wine to drink'},
	]
};

const productsReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_ALL_PRODUCTS: 
			return {...state, list:action.payload.list};
		default: 
			return state;
	} 
}

export default productsReducer;