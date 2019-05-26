import React from 'react';
import PropTypes from 'prop-types';

const Segment = ({ children, type }) => {
	const typeSegment = type || "";
	return <div className={"ui segment " + typeSegment}>{children}</div>
}

Segment.propTypes = {
	type: PropTypes.string
}

export default Segment;