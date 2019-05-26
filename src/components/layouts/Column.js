import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, col }) => {
	return <div className={col}>{children}</div>
}

Column.propTypes = {
	col: PropTypes.string.isRequired
}

export default Column;