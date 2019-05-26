import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SignoutLinks from './SignoutLinks';
import SigninLinks from './SigninLinks';

class MainLayout extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};
	}

	changeText = (e) => {
		e.preventDefault();
		this.setState({
			value: e.target.value
		})
	}

	itemClick = () => {
		this.setState({ value: '' })
	}

	render() {
	    const filteredItems = this.props.items.filter(item => {
	      return item.name.toLowerCase().includes(this.state.value.toLowerCase());
	    })		
	    const verifyLogin = () => {
	    	if(this.props.auth === '') {
	    		return <SignoutLinks />;
	    	} else {
	    		return <SigninLinks />;
	    	}
	    }
		return (
			<div>
				<div className="ui block header">
					  <div className="menuright">
						  <h3><Link to="/">Store</Link></h3>
						  {verifyLogin()}						  
					  </div>
					<NavBar 
						counter={this.props.counter} 
						items={filteredItems} 
						changeText={this.changeText} 
						value={this.state.value}
						itemClick={this.itemClick}
					/>				
				</div>
				<Suspense fallback={<div className="ui loading segment"></div>}>
					<div className="ui container">
						{this.props.children}
					</div>
				</Suspense> 
			</div>
		);		
	}
}

const mapToStateToProps = state => {
	return {
		counter: state.cartStore.counter,
		items: state.products.list,
		auth: state.auth.token
	}
}

export default connect(mapToStateToProps, {})(MainLayout);