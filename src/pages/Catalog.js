import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardHover from '../components/CardHover';
import { Redirect } from 'react-router-dom';
import { incrementCounter, addCart } from '../actions/cartStoreActions';

class Catalog extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cart: false
		};
	}

	buyProduct = (e, item, key) => {
		e.preventDefault();
		const { incrementCounter, counter, addCart } = this.props;
		incrementCounter(counter);
		addCart(item, () => {
			this.setState({cart: true});
		});
	}

	render() {
		if(this.state.cart === true) return <Redirect to="/cart" />;
		return (
			<div className="ui padded segment">				
				<div className="ui special cards" style={{justifyContent: 'center'}}>
				{this.props.products && this.props.products.map(item => {
					return <CardHover product={item} buyProduct={this.buyProduct} />
				})}
				</div>
			</div>
		);
	}
} 

const mapToStateToProps = state => {
	return {
		products: state.products.list,
		counter: state.cartStore.counter
	}
}

export default connect(mapToStateToProps, { incrementCounter, addCart })(Catalog);