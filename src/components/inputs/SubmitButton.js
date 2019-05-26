import React from 'react';

const SubmitButton = ({ text, styled }) => {
	return (
		<button type="submit" className={"ui button "+ styled}>{text}</button>
	);
}

export default SubmitButton;