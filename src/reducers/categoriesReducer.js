import { GET_ALL_CATEGORIES } from '../types';

const initialState = {
	list:[
		{key: 1, name: 'Jam', img: 'jam'},
		{key: 2, name: 'Beer', img: 'beer'},
		{key: 3, name: 'Wine', img: 'wine'}
	]
};

const categoriesReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_ALL_CATEGORIES: 
			return {...state, list:action.payload.list};
		default: 
			return state;
	} 
}

export default categoriesReducer;