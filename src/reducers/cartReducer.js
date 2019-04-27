const initialState = {
	count: 0
};

const cartReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_COUNTER_CART': 
			return {...state, count:action.payload.count};
		default: 
			return state;
	} 
}

export default cartReducer;