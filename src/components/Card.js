import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ category }) => {
	return (
		<Link to={'/category/' + category.key} className="card">
		    <div className="image">
		      <img alt="Category Store" src={require('../assets/categories/'+category.img+'.jpg')} width="200" height="200" />
		    </div>
		    <div className="content">
		      <div className="header">{category.name}</div>
		    </div>
		  </Link>
	);
}

Card.propTypes = {
	category: PropTypes.object.isRequired
}

export default Card;