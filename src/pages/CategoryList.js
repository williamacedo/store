import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import MainLayout from '../components/MainLayout';
const CategoryPage = lazy(() => import('../components/category'));

class CategoryList extends Component {

	render() {
		const { category, products } = this.props;
		const { id } = this.props.match.params;
		const filterName = category.filter(item => item.key === id);
		const filteredProduct = products.filter(product => product.category === id);
		return (
			<MainLayout>
				<CategoryPage 
					filteredProduct={filteredProduct}
					filterName={filterName}
					buyProduct={this.buyProduct}
				/>
			</MainLayout>
		);
	}
}

const mapToStateToProps = state => {
	return {
		category: state.categories.list,
		products: state.products.list,
		counter: state.cartStore.counter,
		items: state.cartStore.items
	}
}

export default connect(mapToStateToProps, { })(CategoryList);