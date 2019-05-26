import React from 'react';
import Card from '../Card';
import Segment from '../segment/Segment';

const HomePage = ({ categories }) => {
	return (
		<Segment col="padded">
			<h2 className="ui header">SHOP FOR</h2>
			<div className="ui link cards">
				{categories && categories.map((category) => {
					return (
						<Card key={category.key} category={category} />
					);
				})}
			</div>
		</Segment>
	);	
}

export default HomePage;