import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ counter, items, changeText, value, itemClick }) => {
	//console.log(items)
	return (
		<div className="ui secondary menu red">
		  <NavLink to="/home" className="item">
		    Home
		  </NavLink>
		  <NavLink to="/catalog" className="item">
		    Catalog
		  </NavLink>
		  <div className="right menu">
				<div className="ui search">
				  <div className="ui icon input">
				    <input className="prompt" type="text" value={value} placeholder="Search products..." onChange={e => changeText(e)} />
				    <i className="search icon"></i>
				  </div>
				  <div className={value !== '' ? "results transition visible" : "results"}>
				  {items && items.map(item => {
				  	return (
				  		<Link to={'/product/' + item.key} onClick={() => itemClick()}>
					  		<div className="searchItem" key={item.key}>
					  			<img alt="product" src={require(`../assets/products/${item.img}.jpg`)} className="searchItem_img" />
					  			<p style={{marginLeft: '5px'}}>{item.name}</p>
					  		</div>
				  		</Link>
				  	);
				  })}
				  </div>
				</div>	  
			    <div className="item">			    		    
				    <Link to="/cart" className="ui red button">
				      <i className="cart icon"></i>
				      ({counter}) Cart
				    </Link>			    
			    </div>
		    </div>		  
		</div>
	);	
}

export default NavBar;