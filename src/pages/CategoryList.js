import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardHover from '../components/CardHover';
import Breadcrumb from '../components/Breadcrumb';

class CategoryList extends Component {
	render() {
		const { category, products } = this.props;
		const { id } = this.props.match.params;
		const filterName = category.filter(item => item.key === id);
		const filteredProduct = products.filter(product => product.category === id);
		return (
			<div>
				<Breadcrumb initialRoute={{name: 'Home', link: '/home'}} middleRoute={{name: 'Categories', link: '/home'}} finalRoute={{name: filterName[0].name}} />
				<div className="ui padded segment">
					<div className="ui special cards">
						{filteredProduct.map((product, index) => {
							return <CardHover key={index} product={product} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

const mapToStateToProps = state => {
	return {
		category: state.categories.list,
		products: state.products.list
	}
}

export default connect(mapToStateToProps, {})(CategoryList);