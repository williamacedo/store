import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<div className="ui segment center aligned">
			<p>Welcome to my shop, made with Reactjs, using librarys like redux, react-router and redux-persist, this shop was made thinking about the perfomace, testing and good pratices.</p>
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