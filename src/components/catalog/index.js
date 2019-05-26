import React from 'react';
import Segment from '../segment/Segment';
import CardHover from '../CardHover';

const CatalogPage = ({ products, buyProduct }) => {
	return (
		<Segment type="padded">				
			<div className="ui special cards" style={{justifyContent: 'center'}}>
			{products && products.map(item => {
				return <CardHover key={item.key} product={item} buyProduct={buyProduct} />
			})}
			</div>
		</Segment>
	);
}

export default CatalogPage;