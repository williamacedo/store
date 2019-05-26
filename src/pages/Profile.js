import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { doLogout } from '../actions/authActions';
import MainLayout from '../components/MainLayout';

class Profile extends Component {
	render() {
		//if(this.props.auth === '') return <Redirect to="/home" />;
		return (
			<MainLayout>
				<div className="ui segment">
					<h1>Profile</h1>
					<button onClick={this.props.doLogout}>Logout</button>
				</div>
			</MainLayout>
		);
	}
}

const mapToPropsToState = state => {
	return {
		auth: state.auth.token
	}
}

export default connect(mapToPropsToState, { doLogout })(Profile);