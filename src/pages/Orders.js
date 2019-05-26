import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

class Orders extends Component {
	render() {
		return (
			<MainLayout>
				<div className="ui segment">
					<h1>Orders</h1>
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

export default connect(mapToPropsToState, {  })(Orders);