import { CHANGE_STATUS } from '../types';

const initialState = {
	token: ''
}

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case CHANGE_STATUS:
			return {...state, token: action.payload.token};
		default: 
			return state;
	}
}

export default authReducer;