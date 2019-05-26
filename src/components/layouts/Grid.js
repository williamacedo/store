import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children, style }) => {
	return <div className="ui grid" style={style}>{children}</div>;
}

Grid.propTypes = {
	style: PropTypes.object
}

export default Grid;