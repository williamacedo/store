import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import MainLayout from '../components/MainLayout';
const HomePage = lazy(() => import('../components/home'));

class Home extends Component {
	render() {
		return (
			<MainLayout>
				<HomePage categories={this.props.categories} />
			</MainLayout>
		);
	}
}

const mapToStateToProps = state => {
	return {
		categories: state.categories.list
	}
}

export default connect(mapToStateToProps, {  })(Home);