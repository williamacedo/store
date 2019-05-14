import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearCart } from '../actions/cartStoreActions';

class Cart extends Component {

	clearCart = () => {
		if(this.props.counter > 0){
			this.props.clearCart();
		}
	}

	render() {
		return (
			<div className="ui segment">
				<div className="ui grid">
					<div className="sixteen wide column">
					    <div className="item">			    
						    <button onClick={this.clearCart} className="ui right floated yellow button">
						      <i className="trash icon"></i>
						      Clear
						    </button>			    
					    </div>
					</div>		
				</div>
				<div className="ui padded segment">
					{this.props.items && this.props.items.map(item => {
						return <CartItem key={item.key} product={item} />;
					})}					
				</div>
			</div>
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