import React from 'react';

const CartItem = ({product}) => {
	return (
		<div className="ui grid cartArea">
		  <div className="ten wide column">
		  	<div className="ui grid">
		  	  <div className="three wide column">
		  	  	<img alt="Cart" src={require(`../assets/products/${product.img}.jpg`)} className="cartImage" />
		  	  </div>
  			  <div className="four wide column">
  			  	<div className="cartInfo">
  			  		<p>{product.name}</p>
  			  		<p>{product.description}</p>
  			  	</div>
  			  </div>
		  	</div>
		  </div>
	  	  <div className="six wide column">
	  	  	<div className="cartQtd">		    
				    <button className="ui compact green icon button">
				      <i className="minus icon"></i>
				    </button>
				    <div className="cartCounter">1</div>	  	  	
				    <button className="ui compact green icon button">
				      <i className="plus icon"></i>
				    </button>			    	    			    		    
	  	  	</div>
	  	  </div>						
		</div>
	);
}

export default CartItem;