import React from 'react';

const CartItem = ({product}) => {
	return (
		<div className="ui grid cartArea">
		  <div className="ten wide column">
		  	<div className="ui grid">
		  	  <div className="three wide column">
		  	  	<img alt="Cart" src={require(`../assets/products/${product.img}.jpg`)} className="cartImage" style={{borderRadius: '50px'}} />
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
	  	  	<div className="cartQtd cartQtd-end">	
	  	  		<h3>Amount</h3>	    
				<p>{product.qtd}</p>		    	    			    		    
	  	  	</div>
	  	  </div>						
		</div>
	);
}

export default CartItem;