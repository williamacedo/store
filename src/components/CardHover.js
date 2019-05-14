import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CardHover = ({ product, buyProduct }) => {
	const [hover, setHover] = useState('hidden');
	return (
	  <div className="card" onMouseEnter={() => setHover('visible active fade in')} onMouseLeave={() => setHover('hidden fade out')}>
	    <div className="blurring dimmable image">
	      <div className={"ui dimmer transition "+hover}>
	        <div className="content">
	          <div className="center button-absolute-center">
	            <button onClick={(e) => {
	            	let array = [];
	            	array.push(product);
	            	buyProduct(e, array, product.key)
	            }} className="ui inverted button">Add to Cart</button>
	          </div>
	        </div>
	      </div>
	      <img alt="Product" src={require('../assets/products/'+product.img+'.jpg')} />
	    </div>
	    <div className="content">
	      <p className="header">{product.name}</p>
	    </div>
	    <div className="extra content">
	        <i className="cart icon"></i>
	        2 Solds
	    </div>
	  </div>		
	);
}

CardHover.propTypes = {
	products: PropTypes.object
}

export default CardHover;