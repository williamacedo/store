import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';

class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};
	}

	changeText = (e) => {
		e.preventDefault();
		this.setState({
			value: e.target.value
		})
	}

	render() {
	    const filteredItems = this.props.items.filter(item => {
	      return item.name.toLowerCase().includes(this.state.value.toLowerCase());
	    })		
		return (
			<div>
				<div>
					<h3><Link to="/">Store</Link></h3>
					<NavBar 
						counter={this.props.counter} 
						items={filteredItems} 
						changeText={this.changeText} 
						value={this.state.value}
					/>				
				</div>
			</div>
		);		
	}
}

const mapToStateToProps = state => {
	return {
		counter: state.cartStore.counter,
		items: state.products.list
	}
}

export default connect(mapToStateToProps, {})(Header);