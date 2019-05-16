import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<div className="ui segment center aligned">
			<h1>Welcome to my shop</h1>
			<p >By: William Macedo</p>
			<div className="item">
				<Link to="/home" className="ui button">
					<i className="home icon"></i>
					Go to Home
				</Link>
			</div>
			
		</div>
	);
}

export default Welcome;