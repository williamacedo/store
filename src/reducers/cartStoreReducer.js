import { ADD_COUNTER_CART, ADD_CART, SET_PRODUCT_ID, CLEAR_CART } from '../types';

const initialState = {
	counter: 0,
	items: [],
	key: ''
}

const cartStoreReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_COUNTER_CART:
			return {...state, counter: action.payload.counter};
		case SET_PRODUCT_ID:
			return {...state, key: action.payload.key};
		case ADD_CART:
			return {...state, items:state.items.concat(action.payload.items)};
		case CLEAR_CART:	
			return {...state, counter: action.payload.counter, items: action.payload.items}	
		default: 
			return state;
	}
}

export default cartStoreReducer;