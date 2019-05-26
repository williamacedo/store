import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleInput from '../components/inputs/SimpleInput';
import SubmitButton from '../components/inputs/SubmitButton';
//import Message from '../components/Message';
import { registerAction } from '../actions/authActions';
import MainLayout from '../components/MainLayout';

class Register extends Component {

	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			password: '',
			copassword: '',
			error: ''
		};
	}

	handleField = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });		
	}	

	render() {
		//console.log(this.props.authError)		
		return (
			<MainLayout>
				<div className="ui center aligned grid">
					<div className="column ten wide">				
						<form className="ui form" onSubmit={(e) => {
							e.preventDefault();
							this.props.registerAction(this.state);
						}}>
			     			 <div className="ui stacked segment">
							    <SimpleInput
							    	textLabel="Name"
							    	type="text"
							    	name="name"
							    	id="name"
							    	placeholder="Your Name"
							    	textChange={this.handleField}
							    	textValue={this.state.name}
							    	onChange={this.handleField}
							    />		     			 
							    <SimpleInput
							    	textLabel="Email"
							    	type="email"
							    	name="email"
							    	id="email"
							    	placeholder="Your Email"
							    	textChange={this.handleField}
							    	textValue={this.state.email}
							    	onChange={this.handleField}
							    />
								<SimpleInput
							    	textLabel="Password"
							    	type="password"
							    	name="password"
							    	id="password"
							    	placeholder="Your Password"
							    	textChange={this.handleField}
							    	textValue={this.state.password}
							    	onChange={this.handleField}
								/>
								<SimpleInput
							    	textLabel="Confirm Password"
							    	type="password"
							    	name="copassword"
							    	id="copassword"
							    	placeholder="Confirm Your Password"
							    	textChange={this.handleField}
							    	textValue={this.state.copassword}
							    	onChange={this.handleField}
								/>							
								<div>		
									<SubmitButton text="Register" styled="large blue" />
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
		//authError: state.auth.authError
	}
}

export default connect(mapToStateToProps, { registerAction })(Register);