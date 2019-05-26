import React from 'react';
import PropTypes from "prop-types";

const Message = ({ header, error }) => {
	return (
		<div className="ui negative message">
		  <i className="close icon"></i>
		  <div className="header">
		    {header}
		  </div>
		  <p>{error}</p>
		</div>
	);
}

Message.propTypes = {
	header: PropTypes.string.isRequired,
	error: PropTypes.string.isRequired
}

export default Message;