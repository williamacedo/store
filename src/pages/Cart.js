import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../actions/cartStoreActions';
import MainLayout from '../components/MainLayout';
const CartPage = lazy(() => import('../components/cart'));

class Cart extends Component {

	constructor() {
		super();

		this.state = {
			checkout: false
		};
	}

	clearCart = () => {
		if(this.props.counter > 0){
			this.props.clearCart();
		}
	}

	checkout = () => {
		this.setState({ checkout: true });
	}

	render() {
		return (
			<MainLayout>
				<CartPage
					items={this.props.items}
					counter={this.props.counter}
					clearCart={this.clearCart}
					goCheckout={this.checkout}
					checkout={this.state.checkout}
				/>
			</MainLayout>
		);
	}
}

const mapToStateToProps = state => {
	return {
		counter: state.cartStore.counter,
		items: state.cartStore.items
	}
}

export default connect(mapToStateToProps, { clearCart })(Cart);