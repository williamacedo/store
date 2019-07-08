import React, { Component } from 'react';
import SimpleInput from '../../components/inputs/SimpleInput';
import SubmitButton from '../../components/inputs/SubmitButton';
import Grid from '../../components/layouts/Grid';
import Column from '../../components/layouts/Column';
import Segment from '../../components/segment/Segment';

class Login extends Component {

	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
	}	

	handleField = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });		
	}	

	render() {
		return (
			<Grid extraClass="center aligned">
			  <Column col="column four wide">		  				
			    <form className="ui form" onSubmit={(e) => this.onSubmit(e)}>
			      <Segment rol="stacked">
				    <SimpleInput
				    	textLabel="Email"
				    	type="email"
				    	name="email"
				    	id="email"
				    	placeholder="Your Email"
				    	onChange={this.handleField}
				    	textValue={this.state.email}
				    />
					<SimpleInput
				    	textLabel="Password"
				    	type="password"
				    	name="password"
				    	id="password"
				    	placeholder="Your Password"
				    	onChange={this.handleField}
				    	textValue={this.state.password}
					/>	   

					<SubmitButton text="Login" styled="large green" />	 	
			      </Segment>


			    </form>
			  </Column>
			</Grid>
		);
	}
}

export default Login;