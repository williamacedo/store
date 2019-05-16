import React, { useState } from 'react';

const CartItem = ({product}) => {

	const [count, setCount] = useState(1);

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
	  	  	<div className="cartQtd">		    
				    <button className="ui compact green icon button" onClick={() => setCount(count - 1)}>
				      <i className="minus icon"></i>
				    </button>
				    <div className="cartCounter">{count}</div>	  	  	
				    <button className="ui compact green icon button" onClick={() => setCount(count + 1)}>
				      <i className="plus icon"></i>
				    </button>			    	    			    		    
	  	  	</div>
	  	  </div>						
		</div>
	);
}

export default CartItem;