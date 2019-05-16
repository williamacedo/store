import React from 'react';

const SearchBoxItem = () => {
	return (
		<div className="searchItem">
			<img src={require('../assets/products/red-wine.jpg')} className="searchItem_img"  />
			<p>Nome</p>
		</div>
	);
}

export default SearchBoxItem;