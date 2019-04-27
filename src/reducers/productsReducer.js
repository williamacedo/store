import { GET_ALL_PRODUCTS } from '../types';

const initialState = {
	list:[
		{key: 1, name: 'Jam 01', category: '1', img: 'jam'},
		{key: 2, name: 'Beer 01', category: '2', img: 'beer'},
		{key: 3, name: 'Wine 01', category: '3', img: 'wine'},
		{key: 1, name: 'Jam 02', category: '1', img: 'jam'}
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