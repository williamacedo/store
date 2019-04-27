import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardHover = ({ product }) => {
	const [hover, setHover] = useState('hidden');
	return (
	  <div className="card" onMouseEnter={() => setHover('visible active fade in')} onMouseLeave={() => setHover('hidden fade out')}>
	    <div className="blurring dimmable image">
	      <div className={"ui dimmer transition "+hover}>
	        <div className="content">
	          <div className="center button-absolute-center">
	            <Link to={"/product/" + product.key} className="ui inverted button">Buy</Link>
	          </div>
	        </div>
	      </div>
	      <img alt="Product" src="https://semantic-ui.com/images/avatar/large/elliot.jpg" />
	    </div>
	    <div className="content">
	      <Link to={"/product/" + product.key} className="header">{product.name}</Link>
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