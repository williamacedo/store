import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearCart } from '../actions/cartStoreActions';
import { Link } from 'react-router-dom';

class Cart extends Component {

	clearCart = () => {
		if(this.props.counter > 0){
			this.props.clearCart();
		}
	}

	render() {
		return (
			<div className={this.props.items.length === 0 ? "ui segment center aligned" : "ui segment"}>
				{this.props.counter > 0 &&
						<div className="ui grid" style={{marginBottom: 10}}>
							<div className="sixteen wide column">
							    <div className="item">			    
								    <button onClick={this.clearCart} className="ui right floated yellow button">
								      <i className="trash icon"></i>
								      Clear
								    </button>			    
							    </div>
							</div>		
						</div>
				}
				<div>
				{this.props.items.length !== 0 &&
				<div className="ui padded segment">
					{this.props.items && this.props.items.map(item => {
						return <CartItem key={item.key} product={item} />;
					})}					
				</div>
				}
				</div>
				<div>
					{this.props.items.length === 0 &&
						<div>
							<p>Empty cart</p>
							<div className="item">
								<Link to="/catalog" className="ui button">
									<i className="arrow left icon"></i>
									Go to Shop
								</Link>
							</div>
						</div>
					}
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