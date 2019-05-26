import React from 'react';
import Segment from '../segment/Segment';
import CardHover from '../CardHover';
import Breadcrumb from '../Breadcrumb';

const CategoryPage = ({ filteredProduct, buyProduct, filterName }) => {
	return (
		<div>
			<Breadcrumb initialRoute={{name: 'Home', link: '/home'}} middleRoute={{name: 'Categories', link: '/home'}} finalRoute={{name: filterName[0].name}} />
			<Segment rol="padded">
				<div className="ui special cards">
					{filteredProduct.map((product, index) => {
						return <CardHover 
									key={index} 
									product={product} 
									buyProduct={buyProduct} 
								/>;
					})}
				</div>
			</Segment>
		</div>
	);
}

export default CategoryPage;