import React, { Component, lazy } from 'react';
import { connect } from 'react-redux';
import MainLayout from '../components/MainLayout';
const CatalogPage = lazy(() => import('../components/catalog'));

class Catalog extends Component {
	render() {
		return (
			<MainLayout>
				<CatalogPage
					products={this.props.products}
					buyProduct={this.buyProduct}
				/>
			</MainLayout>
		);
	}
} 

const mapToStateToProps = state => {
	return {
		products: state.products.list,
		counter: state.cartStore.counter
	}
}

export default connect(mapToStateToProps, { })(Catalog);