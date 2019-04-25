import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';

class Header extends Component {
	render() {
		return (
			<div>
				<div>
					<h3><Link to="/">Store</Link></h3>
					<NavBar counter={this.props.counter} />
				</div>
			</div>
		);		
	}
}

const mapToStateToProps = state => {
	return {
		counter: state.cart.count
	}
}

export default connect(mapToStateToProps, {})(Header);