import React from 'react';
import { Link } from 'react-router-dom';

const SimpleButton = ({ text, styled }) => {
	return (
		<Link to="/register" className={"ui button "+ styled}>{text}</Link>
	);
}

export default SimpleButton;