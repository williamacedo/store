import { makeLogin, makeRegister } from '../StoreAPI';
import { CHANGE_STATUS } from '../types';

export const loginAction = (email, password) => dispatch => {
	makeLogin(email, password)
	.then((token) => {
		//console.log(token);
		dispatch({
			type: CHANGE_STATUS,
			payload: {
				token
			}			
		});
	})
	.catch((error) => {
		console.log(error);
	});
};

export const registerAction = (credentials) => dispatch => {
	makeRegister(credentials.name, credentials.email, credentials.password, credentials.copassword)
		.then((json) => {
			dispatch({
				type: CHANGE_STATUS,
				payload: {
					token: json.token
				}
			})
		})
		.catch((error) => {
			console.log(error)
		});		
};

export const doLogout = () => dispatch => {
	dispatch({
		type: CHANGE_STATUS,
		payload: {
			token: ''
		}				
	});
}