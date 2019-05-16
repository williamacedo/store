import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardHover from '../components/CardHover';

class Catalog extends Component {
	render() {
		return (
			<div className="ui padded segment">				
				<div className="ui special cards" style={{justifyContent: 'center'}}>
				{this.props.products && this.props.products.map(item => {
					return <CardHover product={item} buyProduct={this.buyProduct} />
				})}
				</div>
			</div>
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