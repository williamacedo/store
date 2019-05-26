import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { incrementCounter, addCart } from '../actions/cartStoreActions';
import MainLayout from '../components/MainLayout';

class Product extends Component {

	constructor() {
		super();

		this.state = {
			count: 1,
			cart: false
		};
	}

	buyProduct = (item) => {
		const { incrementCounter, counter, addCart } = this.props;
		incrementCounter(counter);
		addCart(item, this.state.count, () => {
			this.setState({cart: true});
		});
	}	

	render() {
		const { products } = this.props;
		const { count } = this.state;
		const { id } = this.props.match.params;
		const filteredProduct = products.filter(product => parseInt(product.key) === parseInt(id));
		if(this.state.cart === true) return <Redirect to="/cart" />;
		return (
			<MainLayout>
				<div className="ui segment">
					<div className='ui grid' style={{justifyContent: 'center'}}>
					  <div className="five wide column">
					  	<img alt="product" src={require(`../assets/products/${filteredProduct[0].img}.jpg`)} />
					  </div>
					  <div className="six wide column">
					  	<div className="product_info_content">
					  		<h1>{filteredProduct[0].name}</h1>
					  		<h3>Description</h3>
					  		<p>{filteredProduct[0].description}</p>
					  	</div>
					  	<h3>Amount</h3>
				  	  	<div className="cartQtd">		    
							    <button className="ui compact green icon button" onClick={() =>  {
							    	if(this.state.count > 1) {
							    		this.setState({count: count-1})
							    	}
							    }}>
							      <i className="minus icon"></i>
							    </button>
							    <div className="cartCounter">{count}</div>	  	  	
							    <button className="ui compact green icon button" onClick={() => this.setState({count: count+1})}>
							      <i className="plus icon"></i>
							    </button>			    	    			    		    
				  	  	</div>
				  	  	<div className="linha"></div>
						<button class="ui green button" onClick={() => this.buyProduct(filteredProduct[0])}>
						  <i class="cart icon"></i>
						  Add to Cart
						</button>			  	  					  	
					  </div>
					</div>
				</div>
			</MainLayout>
		);
	}
}

const mapToStateToProps = state => {
	return {
		products: state.products.list,
		counter: state.cartStore.counter
	}
}

export default connect(mapToStateToProps, { incrementCounter, addCart })(Product);