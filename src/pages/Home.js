import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';

class Home extends Component {
	render() {
		return (
			<div className="ui padded segment">
				<h2 className="ui header">SHOP FOR</h2>
				<div class="ui link cards">
					{this.props.categories && this.props.categories.map(category => {
						return (
							<Card key={category.id} category={category} />
						);
					})}
				</div>
			</div>
		);
	}
}

const mapToStateToProps = state => {
	return {
		categories: state.categories.list
	}
}

export default connect(mapToStateToProps, {  })(Home);