import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
const CardHover = lazy(() => import('../components/CardHover'));
const Breadcrumb = lazy(() => import('../components/Breadcrumb'));

class CategoryList extends Component {

	render() {
		const { category, products } = this.props;
		const { id } = this.props.match.params;
		const filterName = category.filter(item => item.key === id);
		const filteredProduct = products.filter(product => product.category === id);
		return (
			<div>
				<Suspense fallback={<div className="ui loading segment"></div>}>
					<Breadcrumb initialRoute={{name: 'Home', link: '/home'}} middleRoute={{name: 'Categories', link: '/home'}} finalRoute={{name: filterName[0].name}} />
					<div className="ui padded segment">
						<div className="ui special cards">
							{filteredProduct.map((product, index) => {
								return <CardHover 
											key={index} 
											product={product} 
											buyProduct={this.buyProduct} 
										/>;
							})}
						</div>
					</div>
				</Suspense>
			</div>
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