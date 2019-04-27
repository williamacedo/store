import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ initialRoute, middleRoute, finalRoute }) => {
	return (
		<div className="ui breadcrumb">
		  <Link to={initialRoute.link} className="section">{initialRoute.name}</Link>
		  <div className="divider"> / </div>
		  <Link to={middleRoute.link} className="section">{middleRoute.name}</Link>
		  <div className="divider"> / </div>
		  <div className="active section">{finalRoute.name}</div>
		</div>
	);
}

Breadcrumb.propTypes = {
	initialRoute: PropTypes.object.isRequired,
	finalRoute: PropTypes.object.isRequired,
	middleRoute: PropTypes.object
};

export default Breadcrumb;