import { GET_ALL_CATEGORIES } from '../types';

const initialState = {
	items: []
};

const testeReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_ALL_CATEGORIES: 
			return {...state, list:action.payload.list};
		default: 
			return state;
	} 
}

export default testeReducer;