import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardHover = ({ product, buyProduct }) => {
	const [hover, setHover] = useState('hidden');
	return (
	  <div className="card" onMouseEnter={() => setHover('visible active fade in')} onMouseLeave={() => setHover('hidden fade out')}>
	    <div className="blurring dimmable image">
	      <div className={"ui dimmer transition "+hover}>
	        <div className="content">
	          <div className="center button-absolute-center">
	            <Link className="ui inverted button" to={'/product/'+product.key}>Buy</Link>
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
	products: PropTypes.object,
	buyProduct: PropTypes.func
}

export default CardHover;

// (e) => {
// 	            	let array = [];
// 	            	array.push(product);
// 	            	buyProduct(e, array, product.key)
// 	            }