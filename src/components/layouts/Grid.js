import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children, style, extraClass }) => {
	const extra = extraClass || "";
	return <div className={"ui grid "+extra} style={style}>{children}</div>;
}

Grid.propTypes = {
	style: PropTypes.object,
	extraClass: PropTypes.string
}

export default Grid;