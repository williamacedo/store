const api = 'http://localhost:8000/api/';

export const makeLogin = function(email, password) {
	return new Promise(function(resolve, reject) {
		fetch(api+'login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'email': email,
				'password': password
			}),
		}).then((response) => response.json())
		.then((responseJson) => {
			resolve(responseJson.token);
		})			
	})

};

export const makeRegister = function(name, email, password, copassword) {
	return new Promise(function(resolve, reject) {
		fetch(api+'register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'name': name,
				'email': email,
				'password': password,
				'password_confirmation': copassword
			}),
		}).then((response) => response.json())
		.then((responseJson) => {
			resolve(responseJson);
		})
	})
}