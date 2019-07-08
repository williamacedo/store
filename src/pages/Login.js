import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SimpleInput from '../components/inputs/SimpleInput';
import SubmitButton from '../components/inputs/SubmitButton';
import SimpleButton from '../components/inputs/SimpleButton';
import { loginAction } from '../actions/authActions';
import MainLayout from '../components/MainLayout';

class Login extends Component {

	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	handleField = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });		
	}	

	render() {
		return (
			<MainLayout>
				<div className="ui center aligned grid">
					<div className="column ten wide">
						<form className="ui form" onSubmit={
							(e) => {
								e.preventDefault();
								this.props.loginAction(this.state.email, this.state.password);
							}}>
			     			 <div className="ui stacked segment">
							    <SimpleInput
							    	textLabel="Email"
							    	type="email"
							    	name="email"
							    	id="email"
							    	placeholder="Your Email"
							    	textValue={this.state.email}
							    	onChange={this.handleField}
							    />
								<SimpleInput
							    	textLabel="Password"
							    	type="password"
							    	name="password"
							    	id="password"
							    	placeholder="Your Password"
							    	textValue={this.state.password}
							    	onChange={this.handleField}
								/>
								<div>
									<SubmitButton text="Login" styled="large green" />	
									<span className="divisor_login">OR</span>			
									<SimpleButton text="Register" styled="large blue" />
								</div>
			     			 </div>
			     		</form>
					</div>
				</div>
			</MainLayout>
		);
	}
}

const mapToStateToProps = state => {
	return {
		auth: state.auth.token
	}
}

export default connect(mapToStateToProps, { loginAction })(Login);