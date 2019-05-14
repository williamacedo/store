import { ADD_COUNTER_CART, ADD_CART, CLEAR_CART } from '../types';

export const incrementCounter = counter => {
	let increment = counter + 1;
	return {
		type: ADD_COUNTER_CART,
		payload: {
			counter: increment
		}
	}
}

export const addCart = (item, callback) => dispatch => {
	dispatch({
		type: ADD_CART,
		payload: {
			items: item
		}
	})	

	callback();			
}

export const clearCart = () => {
	return {
		type: CLEAR_CART,
		payload: {
			counter: 0,
			items: []
		}
	}	
}